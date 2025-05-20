import { getProduct } from "@/app/library/api-call";
import AddToCart from "@/component/website/AddToCart";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const page = async ({ params, searchParams }) => {
    const response = await getProduct(null, params?.category_slug, searchParams?.color, searchParams?.limit, searchParams.minPrice, searchParams.maxPrice);
    const products = response?.products || [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden flex flex-col"
                    >
                        {/* Product Image */}
                        <div className="overflow-hidden relative">
                            <img
                                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${product.thumbnail}`}
                                alt={product.name}
                                className="w-full h-48 transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Discount Badge */}
                            <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                                -{product.discountPercentage}%
                            </span>
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col justify-between flex-1 p-5 space-y-4">
                            <div>
                                {/* Color Dots */}
                                <div className="flex items-center mb-3 gap-2">
                                    {product?.colors.map((color, idx) => (
                                        <span
                                            key={idx}
                                            className="w-5 h-5 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200"
                                            style={{ backgroundColor: color.Hexcode }}
                                        ></span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                                    {product.name}
                                </h3>

                                {/* Price Section */}
                                <div className="flex items-center justify-between mt-3">
                                    <div>
                                        <span className="text-2xl font-extrabold text-emerald-600">
                                            ${product.finalPrice.toFixed(2)}
                                        </span>
                                        <div className="text-sm text-gray-400 line-through">
                                            ${product.originalPrice.toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <AddToCart product={product} />
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500 text-lg py-10">
                    No products available.
                </div>
            )}
        </div>
    );
};

export default page;
