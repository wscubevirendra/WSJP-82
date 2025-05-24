const express = require("express");
const CartRouter = express.Router();
const CartController = require("../controllers/cartController")


CartRouter.post('/move-to-db', CartController.moveToDb);
CartRouter.post('/add-to-cart', CartController.addToCart);




module.exports = CartRouter;