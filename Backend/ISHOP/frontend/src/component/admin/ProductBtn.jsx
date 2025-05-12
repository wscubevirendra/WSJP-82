'use client'
import { axiosApiInstance, notify } from '@/app/library/helper'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { FaStar, FaStore, FaShieldAlt, FaTimes } from "react-icons/fa";
import { BsReceipt } from "react-icons/bs";
import Link from 'next/link';


export default function ProductBtn({ product }) {
    const [toggle, setToggle] = useState(null)
    const router = useRouter();

    function statusHandler(id, flag) {

        axiosApiInstance.patch(`product/status/${id}`, { flag }).then(
            (response) => {
                notify(response.data.msg, response.data.flag)
                if (response.data.flag === 1) {
                    router.refresh()

                }
            }
        ).catch(
            (error) => {
                notify("Something went wrong", 0)
            }
        )
    }


    function deleteHandler(id) {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                axiosApiInstance.delete(`product/delete/${id}`).then(
                    (response) => {
                        notify(response.data.msg, response.data.flag)
                        if (response.data.flag === 1) {
                            router.refresh()
                        }
                    }
                ).catch(
                    (error) => {
                        notify("Something went wrong", 0)
                    }
                )




            }
        });

    }




    return (
        <td className="px-4 py-3">
            <div className="flex gap-2 items-center text-white">

                <button onClick={() => statusHandler(product._id, 1)} className="px-3 bg-sky-500 hover:bg-yellow-600 rounded" title="top_Selling">
                    {product.topSelling ?
                        "Yes"
                        :
                        "No"
                    }
                </button>
                <button onClick={() => statusHandler(product._id, 2)} className="px-3  bg-teal-500 hover:bg-yellow-600 rounded" title="Toggle Stock">
                    {product.stock ?
                        "In"
                        :
                        "Out"
                    }
                </button>
                <button onClick={() => statusHandler(product._id, 3)} className="px-3 bg-yellow-500 hover:bg-yellow-600 rounded" title="Toggle Stock">
                    {product.status ?
                        "Active"
                        :
                        "Inactive"
                    }
                </button>
                <button onClick={() => deleteHandler(product._id)} className="px-3 bg-red-500 hover:bg-red-600 rounded" title="Delete">
                    Delete
                </button>
                <button className="px-3 bg-blue-500 hover:bg-blue-600 rounded" title="Edit">
                    Edit
                </button>
                <Link href={`/admin/product/multiple/${product._id}`}>
                    <button className="px-3 bg-indigo-500 hover:bg-indigo-600 rounded" title="View">
                        Image
                    </button>
                </Link>

                <button onClick={() => setToggle(product)} className="px-3 bg-indigo-500 hover:bg-indigo-600 rounded" title="View">
                    View
                </button>
            </div>

            {toggle && <ViewProduct product={toggle} onClose={() => setToggle(null)} />}
        </td>
    )
}



const ViewProduct = ({ product, onClose }) => {
    return (
        <div className="w-full fixed bottom-0 right-0 z-20 p-6 bg-white shadow-xl rounded-t-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                onClick={onClose}
            >
                <FaTimes size={20} />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Thumbnail */}
                <div className="w-full md:w-1/3">
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${product.thumbnail}`}
                        alt={product.name}
                        className="rounded-lg w-full object-cover h-52"
                    />

                    {product.images?.length > 0 && (
                        <div className="mt-4 flex gap-2 flex-wrap">
                            {product.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${img}`}
                                    alt={`product-${idx}`}
                                    className="w-16 h-16 object-cover rounded border"
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-sm text-gray-500 mb-3">{product.shortDescription}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-yellow-500 text-sm">
                        <FaStar />
                        <span className="text-sm font-medium text-gray-700">4.2</span>
                    </div>

                    <div
                        className="mt-4 space-y-2 text-sm text-gray-700"
                        dangerouslySetInnerHTML={{ __html: product.longDescription }}
                    />


                </div>


                {/* Pricing */}
                <div className="mt-4 flex items-center gap-3">
                    <p className="text-2xl font-bold text-green-600">₹{product.finalPrice}</p>
                    <p className="line-through text-gray-400">₹{product.originalPrice}</p>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                        {product.discountPercentage}% OFF
                    </span>
                </div>


            </div>
        </div>
    );
};

