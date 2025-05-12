'use client'
import { axiosApiInstance } from '@/app/library/helper';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter()
    function logoutHandler(e) {
        e.preventDefault();
        axiosApiInstance.get("admin/logout", { withCredentials: true })
        router.push("/admin-login")
    }

    return (
        <header className="w-full shadow-md bg-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-black-600">
                    E-Shop
                </div>
                <button onClick={logoutHandler} className=' shadow bg-gray border cursor-pointer px-4 py-2'>LogOut</button>
            </div>
        </header>
    );
}
