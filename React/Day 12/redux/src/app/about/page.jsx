import Btn from '@/components/Btn'
import React from 'react'

export default function page({ type, flag }) {
    return (
        <div className='w-full flex justify-center items-center  h-[100vh]'>
            <Btn type="Decrement" flag="2" />
        </div>
    )
}
