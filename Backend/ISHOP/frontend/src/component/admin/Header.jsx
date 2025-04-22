import React from 'react';

export default function Header() {
    return (
        <header className="w-full shadow-md bg-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-black-600">
                    E-Shop
                </div>
            </div>
        </header>
    );
}
