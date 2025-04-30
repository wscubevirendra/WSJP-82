'use client'
import { FaChartPie, FaProductHunt, FaThLarge, FaLayerGroup, FaUser, FaFileAlt, FaMapMarkerAlt, FaCube, FaCubes } from 'react-icons/fa';
import { IoIosColorPalette } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import Link from 'next/link';

const SideMenu = () => {
    return (
        <aside className="fixed top-0 left-0 w-64 h-screen bg-[#141522] text-white flex flex-col p-4">
            {/* Logo */}
            <div className="text-3xl font-bold mb-8 text-center">
                <span className="text-white">IS</span>
                <span className="text-yellow-400">H</span>
                <span className="text-white">OP</span>
            </div>

            {/* Menu Sections */}
            <div className="flex-1 space-y-6 overflow-y-auto">
                {/* MENU */}
                <div>
                    <p className="text-gray-400 text-xs uppercase mb-2">Menu</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-3 hover:bg-gray-700 p-2 hover:text-sky-400 rounded-lg cursor-pointer">
                            <FaChartPie />
                            <Link href="/admin"><span>Dashboards</span></Link>
                        </li>
                        <li className="flex items-center gap-3 hover:bg-gray-700 p-2 hover:text-sky-400 rounded-lg cursor-pointer">
                            <FaThLarge />
                            <span>Apps</span>
                        </li>
                    </ul>
                </div>

                {/* PAGES */}
                <div>
                    <p className="text-gray-400 text-xs uppercase mb-2">Pages</p>
                    <ul className="space-y-2">
                        <Link href="/admin/category">
                            <li className="flex items-center gap-3 hover:text-sky-400 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                                <BiCategory />
                                <span>Category</span>
                            </li>
                        </Link>
                        <Link href="/admin/product">
                            <li className="flex items-center gap-3 hover:text-sky-400 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                                <FaProductHunt />
                                <span>Product</span>
                            </li>
                        </Link>
                        <Link href='/admin/color'>
                            <li className="flex items-center gap-3 hover:text-sky-400 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
                                <IoIosColorPalette />
                                <span>Color</span>
                            </li>
                        </Link>
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
        </aside >
    );
};

export default SideMenu;
