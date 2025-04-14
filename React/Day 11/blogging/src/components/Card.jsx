import Image from "next/image";
import React from "react";
import Link from "next/link";

const Card = ({ name, image, cookTimeMinutes, prepTimeMinutes, id }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Image src={image} width={100} className="w-full h-48 object-cover" height={100} />

            <div className="px-6 py-4">
                <Link href={`recipes/${id}`}><div className="font-bold text-xl mb-2">{name}</div></Link>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold">Prep Time:</span> {prepTimeMinutes}
                </p>
                <p className="text-gray-700 text-base">
                    <span className="font-semibold">Cook Time:</span>{cookTimeMinutes}
                </p>
            </div>
        </div>
    );
};

export default Card;