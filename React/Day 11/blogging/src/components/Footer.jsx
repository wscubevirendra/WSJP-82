import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Recipe Haven. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Facebook"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Twitter"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;