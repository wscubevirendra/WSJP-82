const express = require('express');
const ProductRouter = express.Router();
const productController = require('../controllers/productController');
const fileUpload = require('express-fileupload');

ProductRouter.post("/create", fileUpload({ createParentPath: true }), productController.create);
ProductRouter.get("/:id?", productController.read);
ProductRouter.delete("/delete/:id", productController.delete)
ProductRouter.patch("/status/:id", productController.status)
// ProductRouter.put("/update/:id", productController.update)

module.exports = ProductRouter;