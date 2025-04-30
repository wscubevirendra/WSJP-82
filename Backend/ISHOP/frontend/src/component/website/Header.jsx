import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="logo">
                <h1 className="text-2xl font-bold">ShopEase</h1>
            </div>
            <nav className="nav">
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-gray-300">Home</a></li>
                    <li><a href="/products" className="hover:text-gray-300">Products</a></li>
                    <li><a href="/about" className="hover:text-gray-300">About</a></li>
                    <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
            <div className="cart flex items-center">
                <a href="/cart" className="flex items-center space-x-2">
                    <FaShoppingCart className="w-6 h-6" />
                    <span className="cart-count bg-red-500 text-white rounded-full px-2 py-1 text-xs">0</span>
                </a>
            </div>
        </header>
    );
};

export default Header;