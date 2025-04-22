import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold mb-4">About Us</h4>
                        <p className="text-sm">
                            We are a leading e-commerce platform providing the best products at
                            affordable prices.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/about" className="hover:underline">About</a></li>
                            <li><a href="/contact" className="hover:underline">Contact</a></li>
                            <li><a href="/faq" className="hover:underline">FAQ</a></li>
                            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Your E-commerce Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;