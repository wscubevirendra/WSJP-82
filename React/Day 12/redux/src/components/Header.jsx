'use client'
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";


const Header = () => {
    const count = useSelector((state) => state.counter.value)
    const user = useSelector((state) => state.user.value);
    console.log(user)
    return (
        <header className="bg-blue-600 text-white shadow-md py-4 px-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">My App</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-blue-200 transition-colors">About</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-blue-200 transition-colors">Cart({count})</Link>
                    </li>
                     <li>
                       {user.name}
                    </li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;