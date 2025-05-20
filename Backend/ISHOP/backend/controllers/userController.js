var jwt = require('jsonwebtoken');
const UserModel = require("../models/userModel");
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY);


const userController = {
    async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const existingUser = await UserModel.findOne({ email: email });
            if (existingUser) {
                res.send({ msg: "try with diffrent email id", flag: 0 })
            }
            const encPassword = cryptr.encrypt(password);

            const user = await new UserModel({ name, email, password: encPassword })
            var token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "24h" });

            user.save().then(
                () => {
                    res.send({ msg: "Accound created ", flag: 1, user: { ...user.toJSON(), password: "", token } })
                }

            ).catch(
                (err) => {
                    console.log(err)
                    res.send({ msg: "Unable to register ", flag: 0 })
                }

            )


        } catch (error) {
            console.log(error)
            res.send({ msg: "Internal Server Error", flag: 0 })
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserModel.findOne({ email: email });
            if (!user) {
                res.send({ msg: "User not exist", flag: 0 })
            }

            if (password === cryptr.decrypt(user.password)) {
                var token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

                res.send({ msg: "Login succesfully", user: { ...user.toJSON(), password: "", token }, flag: 1 })
            } else {
                res.send({ msg: "Incorrect password", flag: 0 })

            }

        } catch (error) {
            console.log(error)
            res.send({ msg: "Internal Server Error", flag: 0 })
        }
    }
}

module.exports = userController;