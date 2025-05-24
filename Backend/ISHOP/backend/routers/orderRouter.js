const express = require("express");
const OrderRouter = express.Router();
const OrderController = require("../controllers/orderController")


OrderRouter.post('/order-place', OrderController.orderPlace);
OrderRouter.post('/success', OrderController.orderSuccess);
module.exports = OrderRouter;