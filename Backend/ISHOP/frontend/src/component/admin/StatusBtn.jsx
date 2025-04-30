'use client'
import { axiosApiInstance, notify } from '@/app/library/helper'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function StatusBtn({ status, statusURl }) {
    const router = useRouter()
    function handleStatusChange() {
        axiosApiInstance.patch(statusURl).then(
            (response) => {
                notify(response.data.msg, response.data.flag)
                if (response.data.flag === 1) {
                    router.refresh()

                }

            }
        ).catch(
            (error) => {
                console.log(error,"hiiiiiiiii")
                notify("Something went wrong", 0)
            }
        )

    }
    return (
        <button
            onClick={handleStatusChange}
            className={`px-3 py-1 rounded-full text-white font-semibold 
         ${status ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
        >
            {status ? "Active" : "Inactive"}
        </button>
    )
}
