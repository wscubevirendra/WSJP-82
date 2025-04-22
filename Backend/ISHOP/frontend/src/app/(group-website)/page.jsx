'use client'
import React, { useState } from 'react';

export default function StorePage() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
    ]);

    const addProduct = () => {
        const newProduct = {
            id: products.length + 1,
            name: `Product ${products.length + 1}`,
            price: Math.floor(Math.random() * 100),
            image: 'https://via.placeholder.com/150',
        };
        setProducts([...products, newProduct]);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
         
            <button
                onClick={addProduct}
                className="mb-6 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
                Add Product
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                        <p className="text-gray-600 mt-2">${product.price}</p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}