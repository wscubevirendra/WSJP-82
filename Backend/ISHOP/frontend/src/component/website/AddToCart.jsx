'use client'

import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addItem } from '@/redux/features/cartSlice';

export default function AddToCart({ product }) {
    const dispatcher = useDispatch();
    function addtocart() {
        dispatcher(addItem({
            productId: product._id,
            original_price: product.originalPrice,
            final_price: product.finalPrice

        }))
    

    }
    return (
        <button onClick={addtocart} className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md">
            <FaShoppingCart className="text-base" />
            Add to Cart
        </button>
    )
}
