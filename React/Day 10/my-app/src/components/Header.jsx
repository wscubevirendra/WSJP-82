import React from 'react';
import Link from "next/link"

export default function Header() {
    return (
        <header className=" w-full shadow bg-white p-4 flex justify-center items-center gap-10">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/courses">Courses</Link>
        </header>
    )
}
