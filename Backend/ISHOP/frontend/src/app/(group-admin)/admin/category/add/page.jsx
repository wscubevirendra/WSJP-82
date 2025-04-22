'use client'
import { useRef } from 'react';
import Link from 'next/link';
import { createSlug } from '@/app/library/helper';
import axios from 'axios';

export default function CreateCategoryPage() {
  const nameRef = useRef();
  const slugRef = useRef();


  const changeHandler = (e) => {
    const slug = createSlug(nameRef.current.value);
    slugRef.current.value = slug;
  }
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL + "category/create")

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const data = {
      name: nameRef.current.value,
      slug: slugRef.current.value,
    }


    axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + "category/create", data).then(
      (res) => {
        console.log(res.data)
        if (res.data.flag == 1) {
          console.log(res.data.msg)
        }
      }
    ).catch((err) => {
      console.log(err)
    })
  }


  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New Category</h2>
        <Link href="/admin/category">
          <button

            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow transition"
          >

            Back to Categories
          </button>
        </Link>
      </div>
      <div className=" mt-10  mx-[50px] bg-white p-8 rounded-lg shadow-md">


        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              onChange={changeHandler}
              placeholder="Enter category name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="slug" classslug="block text-sm font-medium text-gray-700 mb-1">
              Category Slug
            </label>
            <input
              type="text"
              id="slug"
              ref={slugRef}
              readOnly
              placeholder="Enter category slug"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow transition"
            >
              Create Category
            </button>
          </div>
        </form>
      </div>
    </>

  );
}
