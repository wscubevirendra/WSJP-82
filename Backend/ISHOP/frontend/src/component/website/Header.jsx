'use client'

import { FaChevronDown } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BsGlobe, BsTelephone } from "react-icons/bs";
import Link from "next/link";


export default function Header() {
    return (
        <header className="w-full  shadow-sm">
            <div className="flex justify-between border-b items-center p-2 px-6 text-sm">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">
                        Hotline 24/7
                    </div>
                    <div className="font-semibold">(025) 3886 25 16</div>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                    <span className="hover:underline cursor-pointer">Sell on Swoo</span>
                    <span className="hover:underline cursor-pointer">Order Tracki</span>
                    <div className="flex items-center gap-1 cursor-pointer">
                        USD <FaChevronDown className="text-xs" />
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <img
                            src="https://flagcdn.com/us.svg"
                            alt="EN"
                            className="w-4 h-4 rounded-full"
                        />
                        Eng <FaChevronDown className="text-xs" />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">

                    <div className="leading-4">
                        {/* <div className="font-bold">SWOO</div>
            <div className="text-xs text-gray-600 font-semibold">TECH MART</div> */}
                        <img src="images/logo.png" alt="" />
                    </div>
                </div>

                {/* Nav Menu */}
                <nav className="flex items-center gap-6 font-semibold">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Link href="/">HOME</Link>

                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Link href="/store">STORE</Link>


                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Link href="/">PRODUCT</Link>


                    </div>
                    <div className="cursor-pointer">
                        <Link href="/contact">CONTACT</Link>

                    </div>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-6">
                    <div className="text-right">
                        <div className="text-xs text-gray-500">WELCOME</div>
                        <div className="font-semibold cursor-pointer hover:underline">
                            LOG IN / REGISTER
                        </div>
                    </div>

                    <div className="relative flex items-center gap-2 cursor-pointer">
                        <div className=" relative bg-teal-500 p-2 rounded-full">
                            <FiShoppingCart size={20} />
                            <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                5
                            </span>

                        </div>

                        <div className="font-semibold">$1,689.00</div>
                    </div>
                </div>
            </div>
        </header>
    );
}
