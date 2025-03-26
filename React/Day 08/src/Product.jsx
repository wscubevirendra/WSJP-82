import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Product() {
    const [allProduct, SetallProduct] = useState([]);
    const [categories, SetCategories] = useState([]);
    const [loading, SetLoading] = useState(true)
    const { categorySlug } = useParams();
    const getCategory = () => {
        axios.get("https://dummyjson.com/products/categories").then(
            (response) => {
                SetCategories(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }


    useEffect(
        () => {
            getCategory()
        },
        []
    )

    useEffect(
        () => {
            let API = ""
            SetLoading(true)
            if (categorySlug == null) {
                API = axios.get("https://dummyjson.com/products")
            } else {
                API = axios.get("https://dummyjson.com/products/category/" + categorySlug)

            }
            API.then(
                (response) => {
                    SetallProduct(response.data.products)
                }

            ).catch(
                (error) => {
                    console.log(error)

                }
            ).finally(() => [
                SetLoading(false)
            ])
        },
        [categorySlug]
    )

    return (
        <div className='w-full'>
            <div className="max-w-[1300px] p-4">
                <div className="grid gap-4 items-start grid-cols-12">
                    <ul className=' col-span-2'>
                        <Link to="/">
                            <li className={`w-full ${categorySlug == null ? "bg-teal-100" : ""} mb-4 p-2 shadow`}>All</li></Link>

                        {
                            categories.map((cat, i) => {
                                return (
                                    <Link to={`/${cat.slug}`}> <li className={`w-full ${categorySlug == cat.slug ? "bg-teal-100" : ""} mb-4 p-2 shadow`}>{cat.name}</li> </Link>
                                )
                            })
                        }

                    </ul>
                    <div className='grid col-span-10 gap-5 p-4 items-start grid-cols-3'>
                        {
                            loading == true ?
                                [1, 2, 3, 4, 5, 6, 7, 8].map((prod) => {
                                    return (
                                        <ProductCardSkeleton />
                                    )
                                })
                                :
                                allProduct.map((prod, index) => {

                                    return (
                                        <Link className="max-w-sm p-2 rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-200" to={`/productDetails/${prod.id}`}>
                                            <div >
                                                <img
                                                    className="w-full h-48 object-cover"
                                                    src={prod.thumbnail}
                                                    alt="Product Image"
                                                />
                                                <div className="p-4">
                                                    <h2 className="text-lg font-semibold text-gray-800">{prod.title}</h2>

                                                    <p className="text-gray-600 mt-2">Experience comfort with style.</p>
                                                    <div className="flex justify-between items-center mt-4">
                                                        <span className="text-xl font-bold text-gray-900">${prod.price}</span>
                                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                                            Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div></Link>

                                    )
                                })
                        }




                    </div>

                </div>


            </div>

        </div>
    )
}



const ProductCardSkeleton = () => {
    return (
        <div className="max-w-sm p-2 rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-200 animate-pulse">
            <div className="w-full h-48 bg-gray-300 rounded"></div>
            <div className="p-4">
                <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>

                <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
                <div className="flex justify-between items-center mt-4">
                    <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                    <div className="h-10 bg-gray-300 rounded w-1/3"></div>
                </div>
            </div>
        </div>
    );
};






