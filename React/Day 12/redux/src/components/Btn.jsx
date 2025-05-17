'use client'
import { decrement, increment } from '@/redux/features/counterSlice';
import React from 'react'
import { useDispatch } from 'react-redux'

export default function Btn({ type, flag }) {
    const dispatcher = useDispatch();

    function clickHandler() {
        if (flag == 1) {
            dispatcher(increment())
        } else {

            dispatcher(decrement())
        }

    }
    return (
        <button onClick={clickHandler} className='py-2 p-4  rounded-1xl  bg-blue-300'>
            {type}
        </button>
    )
}
