const express = require("express");
const AdminRouter = express.Router();
const adminController = require("../controllers/adminController")


AdminRouter.post('/login', adminController.login);
AdminRouter.get("/logout", (req, res) => {
    console.log(req)
    res.clearCookie(
        "admin_id", {
        httpOnly: true,
        samesite: "lax",
        secure: false
    }
    )
    res.send("hello")
})


module.exports = AdminRouter;