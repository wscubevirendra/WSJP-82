'use client';
import { useRef, useEffect, use, useState } from 'react';
import Link from 'next/link';
import { axiosApiInstance, createSlug, notify } from '@/app/library/helper';
import { getCategoryById, getColorById } from '@/app/library/api-call';

export default function EditCategoryPage({ params }) {
  const [color, setColor] = useState(null);
  const nameRef = useRef();
  const slugRef = useRef();
  const hexCodeRef = useRef();

  const changeHandler = () => {
    const slug = createSlug(nameRef.current.value);
    slugRef.current.value = slug;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      slug: slugRef.current.value,
      Hexcode: hexCodeRef.current.value
    };

    axiosApiInstance.put(`color/update/${params?.color_id}`, data)
      .then((response) => {
        notify(response.data.msg, response.data.flag)
        if (response.data.flag === 1) {
          e.target.reset();
        }
      })
      .catch((err) => {
        notify("Something went wrong", 0)
      });
  };
  async function getdataById() {
    const colorJSON = await getColorById(params?.color_id);
    const data = colorJSON?.colors;
    setColor(data)
  }
  useEffect(
    () => {
      getdataById()
    },
    [params?.color_id]
  )

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl  p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Color / Edit</h2>
          <Link
            href="/admin/color"
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >

            Back to View
          </Link>
        </div>

        {/* Form Section */}
        <div className="mx-auto  p-8 rounded-xl">
          <form onSubmit={submitHandler} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Color Name
              </label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                onChange={changeHandler}
                defaultValue={color?.name}
                placeholder="Enter category name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>

            {/* Slug Input */}
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                Color Slug
              </label>
              <input
                type="text"
                id="slug"
                ref={slugRef}
                readOnly
                defaultValue={color?.slug}
                placeholder="Slug will be generated automatically"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none cursor-not-allowed"
              />
            </div>
            <div>
              <label htmlFor="hexcode" className="block text-sm font-medium text-gray-700 mb-2">
                Color Code
              </label>
              <input
                type="color"
                id="hexcode"
                ref={hexCodeRef}
                readOnly
                placeholder="Slug will be generated automatically"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none cursor-not-allowed"
              />
              <div className='my-4'>{color?.Hexcode}</div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
              >
                Edit Color
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
