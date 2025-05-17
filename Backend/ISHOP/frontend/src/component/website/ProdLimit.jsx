'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

export default function ProdLimit() {
    const [limit, setLimit] = useState(0);
    const router = useRouter();
    useEffect(
        () => {
            const query = new URLSearchParams();
            query.append("limit", limit)
            router.push(`?limit=${limit}`)
        },
        [limit]
    )

    return (
        <div className='w-full p-4 shadow bg-gray'>
            <select onChange={(e) => setLimit(e.target.value)} name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="10">10</option>
            </select>

        </div>
    )
}
