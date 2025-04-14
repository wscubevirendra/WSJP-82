const express = require("express");
const mongoose = require("mongoose");
const server = express();
server.use(express.json())
const studentLearner = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        contact: {
            type: String,
            default: null
        },
        course: {
            type: String,
            required: true,

        },
        age: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Students = mongoose.model("Students", studentLearner);


server.post("/student/register", async (req, res) => {
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

        res.status(500).json({
            msg: "Internal Server Error", flag: 0, erromsg: error.errmsg
        })
    }

})

server.get("/student", async (req, res) => {
    try {
        const data = await Students.find();
        if (data) {
            res.status(200).json({ msg: "All Student", flag: 1, data })
        } else {
            res.status(400).json({ msg: "Student not found", flag: 0, })

        }


    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error", flag: 0, erromsg: error.errmsg
        })
    }
})

server.get("/student/:id", async (req, res) => {
    try {
        const id = req.params.id
        const data = await Students.findOne({ _id: id });
        if (data) {
            res.status(200).json({ msg: "All Student", flag: 1, data })
        } else {
            res.status(400).json({ msg: "Student not found", flag: 0, })

        }


    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error", flag: 0, erromsg: error.errmsg
        })
    }
})




mongoose.connect("mongodb://localhost:27017/", { dbName: "WSJP82" }).then(
    () => {
        console.log("DataBase Connected")
        server.listen(
            5000,
            () => {
                console.log("Server Started PORT 5000")
            }
        )

    }

).catch(
    () => {
        console.log("Unable to Connected DataBase ")

    }

)
