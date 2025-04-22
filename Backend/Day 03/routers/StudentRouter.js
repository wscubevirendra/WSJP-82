const express = require("express");
const StudentController = require("../controllers/StudentController");
const studentRouter = express.Router();


studentRouter.post("/register", StudentController.register);
studentRouter.get("/get-data", StudentController.getData);
studentRouter.delete("/delete", StudentController.delete);
studentRouter.patch("/update", StudentController.status);



module.exports = studentRouter