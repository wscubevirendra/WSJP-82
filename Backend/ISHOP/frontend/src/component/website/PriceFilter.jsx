'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function PriceFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const applyPriceFilter = () => {
        const params = new URLSearchParams(searchParams);

        minPrice ? params.set('minPrice', minPrice) : params.delete('minPrice');
        maxPrice ? params.set('maxPrice', maxPrice) : params.delete('maxPrice');

        router.push(`${pathname}?${params.toString()}`);
    };

    useEffect(() => {
        setMinPrice(searchParams.get('minPrice') || '');
        setMaxPrice(searchParams.get('maxPrice') || '');
    }, [searchParams]);

    return (
        <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Filter by Price</h2>
            <div className="flex flex-col gap-3">
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                />
                <button
                    onClick={applyPriceFilter}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105 transition-all"
                >
                    Apply Filter
                </button>
            </div>
        </div>
    );
}
