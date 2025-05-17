import { getCategory, getColor } from '@/app/library/api-call';
import React from 'react';
import Link from 'next/link';
import ColorFilter from '@/component/website/ColorFilter';
import ProdLimit from '@/component/website/ProdLimit';
import PriceFilter from '@/component/website/PriceFilter';

export default async function layout({ children }) {
    const categoryJSON = await getCategory();
    const categories = await categoryJSON?.categories;


    return (
        <div className="w-full px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Sidebar */}
                <aside className='flex flex-col gap-20' >
                    {/* Categories Section */}
                    <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 ">
                        <h2 className="text-xl font-bold mb-4 text-gray-900">Categories</h2>
                        <Link href="/store">
                            <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-105 transition-all mb-4">
                                All Categories
                            </button></Link>


                        <ul className="space-y-3 text-sm text-gray-700">
                            {categories.map((category, index) => (
                                <li
                                    key={index}

                                >
                                    <Link className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition" href={`/store/${category.slug}`}>
                                        <span>{category.name}</span>
                                        <span className="text-xs text-gray-500">({category.productCount})</span></Link>

                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colors Section */}
                    <ColorFilter />
                    <PriceFilter />

                </aside>

                {/* Main Content */}
                <div className="md:col-span-4">
                    <ProdLimit />
                    {children}
                </div>
            </div>
        </div>
    );
}
