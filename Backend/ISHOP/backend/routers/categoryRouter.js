const express = require('express');
const CategoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');
const fileUpload = require('express-fileupload');

CategoryRouter.post("/create", fileUpload({ createParentPath: true }), categoryController.create);
CategoryRouter.get("/:id?", categoryController.read);
CategoryRouter.delete("/delete/:id", categoryController.delete)
CategoryRouter.patch("/status/:id", categoryController.statusUpdate)
CategoryRouter.put("/update/:id", categoryController.update)

module.exports = CategoryRouter;