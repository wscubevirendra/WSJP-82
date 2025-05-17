'use client';
import React, { useState } from 'react';
import { axiosApiInstance } from '../library/helper';
import { useRouter } from 'next/navigation';


const AdminLoginPage = () => {
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        axiosApiInstance.post("admin/login", data, { withCredentials: true }).then(
            (response) => {
                console.log(response)
                if (response.data.flag === 1) {
                    localStorage.setItem("admin", JSON.stringify(response.data.admin));
                    localStorage.setItem("loginAt", new Date());
                    router.push("/admin")

                }

            }
        ).catch(
            (error) => {
                console.log(error)

            }
        )

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"

                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;