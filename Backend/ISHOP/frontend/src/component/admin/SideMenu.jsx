'use client'
import { FaChartPie, FaProductHunt, FaThLarge, FaLayerGroup, FaUser, FaFileAlt, FaMapMarkerAlt, FaCube, FaCubes } from 'react-icons/fa';
import { IoIosColorPalette } from "react-icons/io";

import { BiCategory } from "react-icons/bi";
import Link from 'next/link';




const SideMenu = () => {
    return (
        <aside className="w-64 h-screen bg-[#141522] text-white flex flex-col p-4">
            {/* Logo */}
            <div className="text-3xl font-bold mb-8 text-center">
                <span className="text-white">IS</span>
                <span className="text-yellow-400">H</span>
                <span className="text-white">OP</span>
            </div>

            {/* Menu Sections */}
            <div className="flex-1 space-y-6">
                {/* MENU */}
                <div>
                    <p className="text-gray-400 text-xs uppercase mb-2">Menu</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-3 hover:bg-gray-700 p-2 hover:text-[yellow] rounded-lg cursor-pointer">
                            <FaChartPie />
                            <Link href="/admin"><span>Dashboards</span></Link>
                        </li>
                        <li className="flex items-center gap-3 hover:bg-gray-700 p-2 hover:text-[yellow] rounded-lg cursor-pointer">
                            <FaThLarge />
                            <span>Apps</span>
                        </li>
                        <li className="flex items-center gap-3 hover:bg-gray-700 p-2 hover:text-[yellow] rounded-lg cursor-pointer relative">
                            <FaLayerGroup />
                            <span>Layouts</span>
                            <span className="ml-auto bg-red-500 text-xs px-2 py-0.5 rounded-full text-white">Hot</span>
                        </li>
                    </ul>
                </div>

                {/* PAGES */}
                <div>
                    <p className="text-gray-400 text-xs uppercase mb-2">Pages</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-3 hover:text-[yellow] hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                            <BiCategory />

                            <Link href="/admin/category"> <span>Category</span></Link>
                        </li>
                        <li className="flex items-center gap-3 hover:text-[yellow] hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                            <FaProductHunt />

                            <span>Product</span>
                        </li>
                        <li className="flex items-center gap-3 hover:text-[yellow] hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                            <IoIosColorPalette />

                            <span>Color</span>
                        </li>
                    </ul>
                </div>

                {/* COMPONENTS */}
                <div>
                    <p className="text-gray-400 text-xs uppercase mb-2">Other</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                            <FaCube />
                            <span>Order</span>
                        </li>
                        <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                            <FaCubes />
                            <span>Advance UI</span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default SideMenu;
