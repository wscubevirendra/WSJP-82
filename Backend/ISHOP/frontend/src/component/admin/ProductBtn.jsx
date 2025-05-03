'use client'
import { axiosApiInstance, notify } from '@/app/library/helper'
import { useRouter } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2'


export default function ProductBtn({ product }) {
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
                <button className="px-3 bg-indigo-500 hover:bg-indigo-600 rounded" title="View">
                    View
                </button>
            </div>
        </td>
    )
}
