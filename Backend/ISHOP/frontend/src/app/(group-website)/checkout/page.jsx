'use client'
import { axiosApiInstance, notify } from "@/app/library/helper";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { emptyCart } from "@/redux/features/cartSlice";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";


const Checkout = () => {
    const { error, isLoading, Razorpay } = useRazorpay();

    const user = useSelector((state) => state.user.data);
    const cart = useSelector((state) => state.cart);
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [paymentMode, setPaymentMode] = useState(0);
    const router = useRouter();
    const dispatcher = useDispatch();
    const [isClient, setIsClient] = useState(false); // To ensure client-only rendering

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient || !user || !user.shipping_address || user.shipping_address.length === 0 || !cart) {
        return <div className="p-6 text-center">Loading...</div>;
    }
    function handlePlaceOrder() {
        axiosApiInstance.post("/order/order-place", {
            user_id: user._id,
            order_total: cart.final_total,
            payment_mode: paymentMode,
            shipping_details: user.shipping_address[selectedAddress],
        })
            .then((response) => {
                const data = response.data;

                if (data.flag === 1) {
                    if (paymentMode === 0) {
                        dispatcher(emptyCart());
                        router.push(`/thank-you/${data.order_id}`);
                        notify(data.message, data.flag);
                        return;
                    }

                    const options = {
                        key: process.env.NEXT_PUBLIC_KEY_id,
                        order_id: data.razorpay_order_id,
                        currency: "INR",
                        name: "Rahul PVT LTD",
                        description: "Payment for your order",
                        image: "https://example.com/your_logo",
                        handler: function (razorpay_response) {
                            axiosApiInstance.post("/order/success", {
                                order_id: data.order_id,
                                user_id: user._id,
                                razorpay_response
                            })
                                .then((res) => {
                                    if (res.data.flag === 1) {
                                        dispatcher(emptyCart());
                                        router.push(`/thank-you/${res.data.order_id}`);
                                    } else {
                                        notify(res.data.message, res.data.flag);
                                    }
                                })
                                .catch((err) => {
                                    console.error("Verification failed", err);
                                    notify("Payment verification failed", 0);
                                });
                        },
                        prefill: {
                            name: user.name,
                            email: user.email,
                            contact: user.contact
                        },
                        notes: {
                            address: "Razorpay Corporate Office"
                        },
                        theme: {
                            color: "#3399cc"
                        }
                    };

                    const rzp1 = new Razorpay(options);

                    rzp1.on("payment.failed", function (response) {
                        console.error("Payment failed", response.error);
                        notify("Payment failed. Please try again.", 0);
                    });

                    rzp1.open();
                } else {
                    notify(data.message, data.flag);
                }
            })
            .catch((error) => {
                console.error("Order placement error:", error);
                notify("Order could not be placed. Please try again.", 0);
            });
    }


    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
                {/* Address and Payment */}
                <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Checkout</h1>

                    {/* Address Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Address</h2>
                        {user.shipping_address.map((address, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedAddress(index)}
                                className={`p-4 border rounded-lg mb-4 cursor-pointer ${selectedAddress === index ? "border-blue-500 bg-blue-50" : "border-gray-300"
                                    }`}
                            >
                                <p className="font-medium">{address.name}</p>
                                <p>{address.contact}</p>
                                <p>{address.addressLine1}</p>
                                {address.addressLine2 && <p>{address.addressLine2}</p>}
                                <p>{address.city}, {address.state}, {address.postalCode}</p>
                                <p>{address.country}</p>
                            </div>
                        ))}
                        <div className="w-[100px] text-center p-2 bg-blue-500 border text-white rounded-md cursor-pointer">+</div>
                    </div>

                    {/* Payment Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Select Payment Mode</h2>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setPaymentMode(0)}
                                className={`flex-1 py-3 text-center rounded-lg font-medium border ${paymentMode === 0
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "bg-gray-50 text-gray-700 border-gray-300"
                                    }`}
                            >
                                Cash on Delivery (COD)
                            </button>
                            <button
                                onClick={() => setPaymentMode(1)}
                                className={`flex-1 py-3 text-center rounded-lg font-medium border ${paymentMode === 1
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "bg-gray-50 text-gray-700 border-gray-300"
                                    }`}
                            >
                                Online Payment
                            </button>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="w-full h-[400px] lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h2>
                    <div className="p-4 bg-gray-50 border rounded-lg">
                        <div className="flex justify-between mb-2">
                            <p>Total Amount:</p>
                            <p className="font-medium">{cart.original_total}</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p>Discount:</p>
                            <p className="text-green-600">{cart.original_total - cart.final_total}</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p>Final Amount:</p>
                            <p className="font-semibold text-lg">{cart.final_total}</p>
                        </div>
                    </div>

                    <button
                        onClick={handlePlaceOrder}
                        className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
