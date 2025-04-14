'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Slider({ data }) {
    const [current, setCurrent] = useState(0)

    useEffect(
        () => {
            const interval = setInterval(
                () => {

                    setCurrent(
                        (current) => {
                            console.log(current)
                            return current === data.length - 1 ? 0 : current + 1

                        }
                    )
                },
                2000
            )

            return () => {
                clearInterval(interval) // Clear the interval when the component unmounts cleanup function
            }

        },
        []
    )

    return (
        <div className=' relative '>
            {
                data.map((d, i) => {
                    return <div className={`w-full ${current == i ? " opacity-100 scale-[1]" : " opacity-0 scale-[0]"}  absolute top-0 left-0   h-[300px]`} key={i}>
                        <Image src={d.image} className={`w-full }  duration-500 rounded-2xl shadow h-[300px]`} fill />
                        <Link href={`/recipes/${d.id}`} className=' bg-black p-1 absolute bottom-2 rounded-2xl text-white'>Read More</Link>
                    </div>
                })
            }
        </div>
    )
}
