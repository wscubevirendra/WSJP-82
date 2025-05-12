'use client'
import React from 'react'
import { axiosApiInstance, getCookies, notify } from '@/app/library/helper';
import { FiTrash2 } from "react-icons/fi";
import { useRouter } from 'next/navigation';

export default function DeleteBtn({ deleteURL }) {
    const router = useRouter();
    const token = getCookies('admin_token')
    function handleDelete() {
        axiosApiInstance.delete(deleteURL, {
            headers: {
                Authorization: token ?? ""
            }
        }).then(
            (response) => {
                notify(response.data.msg, response.data.flag)
                if (response.data.flag === 1) {
                    router.refresh()
                }
            }
        ).catch(
            (error) => {
                console.log(error)
                notify("Something went wrong", 0)
            }
        )
    }
    return (
        <button onClick={handleDelete} className="text-red-500 hover:text-red-600 transition">
            <FiTrash2 className="text-lg" />
        </button>
    )
}
