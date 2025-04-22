'use client'
import axios from 'axios'
import React from 'react'

export default function StatusBtn({ status, id }) {
    const statusUpdate = (id) => {
        axios.patch("http://localhost:5000/student/status-update/" + id).then(
            (response) => {
                if (response.data.flag === 1) {
                    window.location.reload()
                }

            }
        ).catch(
            (error) => {
                console.log(error)

            }
        )
    }

    return (
        <button
            onClick={() => statusUpdate(id)}

            className={` ${status ? "bg-teal-400" : "bg-red-400"} bg-blue-500  text-white px-3 py-1 rounded`}
        >
            {status ? "Active" : "Inactive"}
        </button>
    )
}
