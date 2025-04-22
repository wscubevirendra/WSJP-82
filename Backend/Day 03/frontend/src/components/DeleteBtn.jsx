'use client'
import axios from 'axios'
import React from 'react'

export default function DeleteBtn({ id }) {
    function deleteHandler(id) {
        axios.delete("http://localhost:5000/student/delete/" + id).then(
            (response) => {
                if (response.data.flag === 1) {
                    window.location.reload()
                }
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }
    return (
        <button
            onClick={() => {
                deleteHandler(id)
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
            Delete
        </button>
    )
}
