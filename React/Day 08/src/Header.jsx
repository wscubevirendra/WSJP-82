import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import { useContext } from "react";
import { StoreContext } from "./Context";

export default function Header() {
    const { cart } = useContext(StoreContext)
    return (
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-600">EcoShop</h1>
            <nav>
                <ul className="flex space-x-6 text-gray-700">
                    <li><a href="#" className="hover:text-green-600">Home</a></li>
                    <li><Link to="/" className="hover:text-green-600">Shop</Link></li>
                    <li><a href="#" className="hover:text-green-600">About</a></li>
                    <li><a href="#" className="hover:text-green-600">Contact</a></li>
                </ul>
            </nav>
            <div className="flex items-center space-x-4">

                <Link to="/cart" className="bg-green-600 flex gap-2 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Cart
                    <div className=" relative">
                        <ShoppingCart />
                        <span className="w-6 h-6 flex justify-center items-center animate-bounce absolute -top-5 -right-5 bg-black rounded-full text-white p-1">
                            {cart.length}
                        </span>
                    </div>
                </Link>
            </div>
        </header>
    );
}