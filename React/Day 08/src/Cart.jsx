import { useContext, useState } from "react";
import { StoreContext } from "./Context";

const Cart = () => {
    const { cart ,qtyHandler} = useContext(StoreContext);
    return (
        <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
            <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p className="text-center text-gray-600">Your cart is empty.</p>
                ) : (
                    <div>
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b py-4"
                            >
                                <div className="flex items-center gap-4">
                                    <img src={item.thumbnail} alt={item.title} className="w-16 h-16 rounded" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-gray-600">${item.price} each</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                    onClick={() => qtyHandler(item.id,2)}

                                        className="px-3 py-1 bg-gray-300 text-black rounded"
                                    >
                                        -
                                    </button>
                                    <span className="text-lg font-bold">{item.qty}</span>
                                    <button
                                        onClick={() => qtyHandler(item.id,1)}

                                        className="px-3 py-1 bg-gray-300 text-black rounded"
                                    >
                                        +
                                    </button>
                                    <button

                                        className="px-3 py-1 bg-red-500 text-white rounded"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;