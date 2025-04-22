const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRouter = require("./routers/StudentRouter");
const server = express();
server.use(express.json());
server.use(cors());
server.use("/student", studentRouter)


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
