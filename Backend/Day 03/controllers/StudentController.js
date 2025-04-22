const Students = require("../models/StudentModel");
const ErrorHandler = require("../utils/ErroHandler");

const StudentController = {
    async register(req, res, next) {
        try {
            const student = new Students({
                name: req.body.name,
                email: req.body.email,
                contact: req.body.contact,
                age: req.body.age,
                course: req.body.course,
            })

            await student.save();
            res.status(201).json({ msg: "Student Register", flag: 1 })

        } catch (error) {
            console.log(error)
            return next(new ErrorHandler("Internal server error", 500))
        }

    },

    async getData(req, res, next) {

        try {
            const data = await Students.find();
            if (data) {
                res.status(200).json({ msg: "All Student", flag: 1, data })
            } else {
                return next(new ErrorHandler("Student not find", 500))

            }


        } catch (error) {
         
            return next(new ErrorHandler("Internal server error", 500))
        }

    },

    async delete(req, res) {
        try {
            const id = req.params.id;
            const student = await Students.findById(id);
            if (student) {
                const result = await Students.deleteOne({ _id: id });
                if (result.deletedCount == 1) {
                    res.status(200).json({ msg: "User Delete ", flag: 1 })
                } else {
                    res.status(200).json({ msg: "Unable to delete user ", flag: 1 })

                }

            } else {
                res.status(400).json({ msg: "Student not found", flag: 0, })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                msg: "Internal Server Error", flag: 0, erromsg: error.errmsg
            })
        }
    },

    async status(req, res) {
        try {
            const id = req.params.id;
            const student = await Students.findById(id);
            if (student) {
                const result = await Students.updateOne(
                    { _id: id },
                    { status: !student.status }
                )

                res.status(200).json({ msg: "User status update", flag: 1 })


            } else {
                res.status(400).json({ msg: "User not found", flag: 0, })
            }


        } catch (error) {
            res.status(500).json({
                msg: "Internal Server Error", flag: 0, erromsg: error.errmsg
            })
        }

    }
}

module.exports = StudentController