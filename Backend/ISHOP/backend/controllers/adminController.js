const AdminModel = require("../models/adminModel");
var jwt = require('jsonwebtoken');


const adminController = {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const admin = await AdminModel.findOne({ email: email });
            if (!admin) {
                res.send({ msg: "Admin not exist", flag: 0 })
            }

            if (password === admin.password) {
                var token = jwt.sign({ id: admin._id }, process.env.SECRET_KEY, { expiresIn: "1h" });

                res.cookie('admin_token', token, {
                    httpOnly: false,    // Prevents JavaScript access (recommended for security)
                    secure: true,      // Send only over HTTPS
                    maxAge: 24 * 60 * 60 * 1000,// 1 day
                    samesite: 'lex',     // Helps prevent CSRF
                });
                res.send({ msg: "Login succesfully", admin: { ...admin.toJSON(), password: "", token }, flag: 1 })
            } else {
                res.send({ msg: "Incorrect password", flag: 0 })

            }

        } catch (error) {
            console.log(error)
            res.send({ msg: "Internal Server Error", flag: 0 })
        }
    }
}

module.exports = adminController;