const CartModel = require("../models/cartModel");
const OrderModel = require("../models/OrderModel");
const UserModel = require("../models/userModel");
const Razorpay = require('razorpay');
const crypto = require("crypto")
var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_id,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

const OrderController = {
    async orderSuccess(req, res) {
        try {
            const { order_id, user_id, razorpay_response } = req.body;

            const order = await OrderModel.findById(order_id);
            if (!order) return res.send({ message: "Order not found", flag: 0 });

            if (order.payment_status === 1) {
                return res.send({ message: "Order already paid", flag: 0 });
            }

            const generated_signature = crypto
                .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
                .update(`${razorpay_response.razorpay_order_id}|${razorpay_response.razorpay_payment_id}`)
                .digest("hex");

            if (generated_signature !== razorpay_response.razorpay_signature) {
                return res.send({ message: "Payment verification failed", flag: 0 });
            }

            order.payment_status = 1;
            order.order_status = 1;
            order.razorpay_payment_id = razorpay_response.razorpay_payment_id;
            await order.save();

            await CartModel.deleteMany({ user_id });

            res.send({ message: "Payment successful", flag: 1, order_id: order._id });
        } catch (error) {
            console.error("Order Success Error:", error);
            res.status(500).send({ message: "Internal Server Error", flag: 0 });
        }
    }
    ,
    async orderSuccess(req, res) {
        try {
            const { order_id, user_id, razorpay_response } = req.body;
            const order = await OrderModel.findById(order_id);
            if (!order) {
                return res.send({ message: "Order not found", flag: 0 });
            }
            const user = await UserModel.findById(user_id);
            if (!user) {
                return res.send({ message: "User not found", flag: 0 });
            }
            // Check if the order is already paid
            if (order.payment_status == 1) {
                return res.send({ message: "Order already paid", flag: 0 });
            }
            // Verify the payment

            const generated_signature =
                crypto
                    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
                    .update(razorpay_response.razorpay_order_id + "|" + razorpay_response.razorpay_payment_id)
                    .digest("hex");
            console.log(generated_signature);
            console.log(razorpay_response.razorpay_signature);
            if (generated_signature !== razorpay_response.razorpay_signature) {
                return res.send({ message: "Payment verification failed", flag: 0 });
            }
            // Update order status to paid
            order.payment_status = 1;
            order.order_status = 1;
            order.razorpay_payment_id = razorpay_response.razorpay_payment_id;
            await order.save();
            await CartModel.deleteMany({ user_id });
            res.send({ message: "Order placed succesfully", flag: 1, order_id: order._id });
        } catch (error) {
            console.error("Error in order success:", error.message);
            res.send({ message: "Internal server error", flag: 0 });
        }
    }




}

module.exports = OrderController;