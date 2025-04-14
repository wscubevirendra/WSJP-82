'use client'

import React, { useState } from 'react'

export default function Counter() {
    const [count, SetCount] = useState(0);

    function incHandler() {
        SetCount(count + 1)
    }

    function decHandler() {
        SetCount(count - 1)
    }

    return (
        <div className=' shadow text-2xl p-4 flex justify-center items-center gap-10'>
            <button onClick={incHandler}>+</button>
            <h1>{count}</h1>
            <button onClick={decHandler}>-</button>
        </div>
    )
}
