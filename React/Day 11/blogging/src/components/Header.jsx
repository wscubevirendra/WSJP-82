'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Header() {
    const pathname = usePathname();

    const menuItem = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Recipes",
            link: "/recipes"
        },

        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Blog",
            link: "/blog"
        }
    ]
    return (
        <header className="bg-white text-black p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Recipe Website</h1>
                <nav>
                    <ul className="flex space-x-6">
                        {
                            menuItem.map((item, i) => {
                                return <li key={i}>
                                    <Link href={item.link} className={`hover:underline ${pathname == item.link ? "bg-blue-500" : ""} px-4 py-1 rounded-3xl  hover:font-bold`}>
                                        {item.name}
                                    </Link>
                                </li>

                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}