'use client'

import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { axiosApiInstance } from "@/app/library/helper";
import { setUser } from "@/redux/features/userSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

const AuthTabs = () => {
    const params = useSearchParams()
    const [activeTab, setActiveTab] = useState("signin");
    const router = useRouter()
    const dispatcher = useDispatch()
    const lsCart = JSON.parse(localStorage.getItem('cart'));
    const cart = lsCart ? lsCart.items : null;
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        axiosApiInstance.post("user/login", data).then(
            async (response) => {

                if (response.data.flag === 1) {
                    dispatcher(setUser({
                        data: response.data.user,
                        token: response.data.token
                    }))

                    const updatedCart = await axiosApiInstance.post("cart/move-to-db", {
                        user_id: response.data?.user?._id,
                        cart: cart != null ? cart : null
                    })
                    let final_total = 0;
                    let original_total = 0;
                    console.log(updatedCart,"updatedCart")
                    const dbCart = updatedCart.data?.cart?.map(
                        (cd) => {
                            final_total += ((cd.product_id?.finalPrice) * cd.qty);
                            original_total += ((cd.product_id?.originalPrice) * cd.qty);

                            return {
                                productId: cd.product_id._id,
                                qty: cd.qty
                            }


                        }
                    )

                    console.log(dbCart,final_total,original_total)

                    // localStorage.setItem("cart", JSON.stringify({
                    //    items: dbCart, final_total, original_total
                    // }))



                    // if (params.get("ref") === "checkout") {
                    //     router.push("/checkout")
                    // } else {
                    //     router.push("/")

                    // }

                }

            }
        ).catch(
            (error) => {
                console.log(error)

            }
        )

    };


    const registerSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        axiosApiInstance.post("user/login", data).then(
            (response) => {

                if (response.data.flag === 1) {
                    const data = {
                        data: response.data.user,
                        loginAt: new Date(),
                        token: response.data.token
                    }
                    localStorage.setItem("user", JSON.stringify(data));
                    router.push("/")
                }

            }
        ).catch(
            (error) => {
                console.log(error)

            }
        )

    };




    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-blue-600">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
                {/* Tabs */}
                <div className="flex justify-around mb-6 border-b">
                    <button
                        onClick={() => setActiveTab("signin")}
                        className={`text-lg font-semibold pb-2 ${activeTab === "signin"
                            ? "border-b-2 border-blue-600 text-blue-600"
                            : "text-gray-500"
                            }`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setActiveTab("signup")}
                        className={`text-lg font-semibold pb-2 ${activeTab === "signup"
                            ? "border-b-2 border-blue-600 text-blue-600"
                            : "text-gray-500"
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Form */}
                {activeTab === "signin" ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex items-center border rounded px-3 py-2">
                            <MdEmail className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center border rounded px-3 py-2">
                            <FaLock className="text-gray-400 mr-2" />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="w-full focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Sign In
                        </button>
                    </form>
                ) : (
                    <form onSubmit={registerSubmit} className="space-y-4">
                        <div className="flex items-center border rounded px-3 py-2">
                            <FaUser className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Username"
                                name="name"
                                className="w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center border rounded px-3 py-2">
                            <MdEmail className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="w-full focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center border rounded px-3 py-2">
                            <FaLock className="text-gray-400 mr-2" />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="w-full focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AuthTabs;
