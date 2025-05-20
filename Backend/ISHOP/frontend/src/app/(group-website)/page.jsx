import { getProduct } from "../library/api-call";
import { FaShoppingCart } from "react-icons/fa";



const StorePage = async () => {
    const productJSON = await getProduct();
    const products = productJSON?.products


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
                            <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                                -{product.discountPercentage}%
                            </span>
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col justify-between flex-1 p-5 space-y-4">
                            <div>
                                <div className="flex items-center mb-3 gap-2">
                                    {product?.colors.map((color, idx) => (
                                        <span
                                            key={idx}
                                            className="w-5 h-5 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200"
                                            style={{ backgroundColor: color.Hexcode }}
                                        ></span>
                                    ))}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                                    {product.name}
                                </h3>
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
                            <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md">
                                <FaShoppingCart className="text-base" />
                                Add to Cart
                            </button>
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

export default StorePage;
