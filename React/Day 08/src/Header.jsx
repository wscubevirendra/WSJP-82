import { Link } from "react-router-dom";

export default function Header() {
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
                <button className="text-gray-700 hover:text-green-600">Login</button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Sign Up</button>
            </div>
        </header>
    );
}