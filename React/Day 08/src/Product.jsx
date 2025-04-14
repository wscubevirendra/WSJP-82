import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import MultipleItems from './MultipleItems';
import { StoreContext } from './Context';

export default function Product() {
    const { addToCart } = useContext(StoreContext)
    const [allProduct, SetallProduct] = useState([]);
    const [categories, SetCategories] = useState([]);
    const [loading, SetLoading] = useState(true)
    const [totalPage, SetTotalPage] = useState(0)
    const [current, SetCuurent] = useState(0)
    const { categorySlug } = useParams();
    const limit = 10;
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
                    SetTotalPage(Math.ceil(response.data.total / limit));
                }

            ).catch(
                (error) => {
                    SetallProduct([])

                }
            ).finally(() => [
                SetLoading(false)
            ])
        },
        [categorySlug]
    )

    useEffect(
        () => {
            SetLoading(true)
            axios.get(`https://dummyjson.com/products?skip=${current * limit}`).then(
                (response) => {
                    SetallProduct(response.data.products)
                }

            ).catch(
                (error) => {
                    SetallProduct([])

                }
            ).finally(() => [
                SetLoading(false)
            ])
        },
        [current]
    )

    const pagination = []
    for (let i = 0; i < totalPage; i++) {
        pagination.push(
            <li onClick={() => SetCuurent(i)} className="flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                {i + 1}
            </li>
        )

    }



    return (
        <div className='w-full'>
            <div className="max-w-[1300px] p-4">
                <MultipleItems allProduct={allProduct} />
                <div className="grid gap-4 items-start grid-cols-12">
                    <ul className='col-span-2'>
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
                    <div className=' col-span-10  p-4 items-start '>



                        <div className='grid  gap-5 items-start grid-cols-3'>
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
                                            <div className="max-w-sm p-2 rounded-2xl shadow-lg overflow-hidden bg-white border border-gray-200">
                                                <div >
                                                    <Link to={`/productDetails/${prod.id}`}>
                                                        <img
                                                            className="w-full h-48 object-cover"
                                                            src={prod.thumbnail}
                                                            alt="Product Image"
                                                        /></Link>

                                                    <div className="p-4">
                                                        <h2 className="text-lg font-semibold text-gray-800">{prod.title}</h2>

                                                        <p className="text-gray-600 mt-2">Experience comfort with style.</p>
                                                        <div className="flex justify-between items-center mt-4">
                                                            <span className="text-xl font-bold text-gray-900">${prod.price}</span>
                                                            <button onClick={() => addToCart(prod.id)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                                                Add to Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div></div>

                                        )
                                    })
                            }
                        </div>

                        <ul class="flex mt-10 rouded-sm justify-center -space-x-px text-sm">
                            {pagination}

                        </ul>





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






