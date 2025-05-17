'use client'
import { axiosApiInstance } from '@/app/library/helper';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { removeAdmin, setAdmin } from '@/redux/features/adminSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
    const dispatch = useDispatch();
    const admin = useSelector((state) => state.admin);
    const router = useRouter();

    const [timeAgoText, setTimeAgoText] = useState('');

    function timeAgo(dateString) {
        const now = new Date();
        const date = new Date(dateString);
        const seconds = Math.floor((now - date) / 1000);

        let interval = Math.floor(seconds / 31536000);
        if (interval >= 1) return `${interval} year${interval > 1 ? "s" : ""} ago`;

        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) return `${interval} month${interval > 1 ? "s" : ""} ago`;

        interval = Math.floor(seconds / 86400);
        if (interval >= 1) return `${interval} day${interval > 1 ? "s" : ""} ago`;

        interval = Math.floor(seconds / 3600);
        if (interval >= 1) return `${interval} hour${interval > 1 ? "s" : ""} ago`;

        interval = Math.floor(seconds / 60);
        if (interval >= 1) return `${interval} minute${interval > 1 ? "s" : ""} ago`;

        return "Just now";
    }

    // Update time ago every 60 seconds
    useEffect(() => {
        if (admin?.logingAt) {
            const updateAgo = () => {
                setTimeAgoText(timeAgo(admin.logingAt));
            };
            updateAgo(); // Initial call

            const intervalId = setInterval(updateAgo, 60000); // every 60 sec

            return () => clearInterval(intervalId);
        }
    }, [admin?.logingAt]);

    // Get admin from localStorage if exists
    useEffect(() => {
        const lsAdmin = localStorage.getItem("admin");
        const loginAt = localStorage.getItem("loginAt");

        if (lsAdmin) {
            dispatch(setAdmin({
                admin: JSON.parse(lsAdmin),
                loginAt: loginAt
            }));
        }
    }, [dispatch]);

    function logoutHandler(e) {
        e.preventDefault();
        axiosApiInstance.get("admin/logout", { withCredentials: true })
            .then(() => {
                dispatch(removeAdmin());
                router.push("/admin-login");
            })
            .catch(() => {
                // Optionally handle error
            });
    }

    return (
        <header className="w-full shadow-md bg-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Left side */}
                <div className="flex flex-col text-black">
                    <span className="text-lg font-semibold">Hi, {admin?.data?.name || "Admin"}</span>
                    {admin?.logingAt && (
                        <span className="text-sm text-gray-500">Logged in {timeAgoText}</span>
                    )}
                </div>

                {/* Right side */}
                <button
                    onClick={logoutHandler}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded transition duration-300"
                >
                    Log Out
                </button>
            </div>
        </header>
    );
}
