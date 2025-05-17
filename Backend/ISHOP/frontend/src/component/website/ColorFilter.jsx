'use client';

import { getColor } from '@/app/library/api-call';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ColorFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [colors, setColors] = useState([]);
    const [userColor, setUserColor] = useState(null);

    useEffect(() => {
        async function fetchColors() {
            const colorJSON = await getColor();
            setColors(colorJSON?.colors || []);
        }
        fetchColors();
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (userColor) {
            params.set('color', userColor);
        } else {
            params.delete('color');
        }
        router.push(`?${params.toString()}`);
    }, [userColor]);

    return (
        <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Filter by Color</h2>
            <div className="flex flex-wrap gap-3">
                {colors.map((color, index) => (
                    <button
                        key={index}
                        onClick={() => setUserColor(userColor === color.slug ? null : color.slug)}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                            userColor === color.slug
                                ? 'ring-2 ring-emerald-500 border-white scale-110'
                                : 'border-gray-200 hover:scale-110 hover:ring-2 hover:ring-gray-300'
                        }`}
                        style={{ backgroundColor: color.Hexcode }}
                    ></button>
                ))}
            </div>
        </div>
    );
}
