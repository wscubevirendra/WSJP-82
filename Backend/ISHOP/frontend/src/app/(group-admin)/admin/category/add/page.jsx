'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { axiosApiInstance, createSlug, notify } from '@/app/library/helper';

export default function AddCategoryPage() {
  const nameRef = useRef();
  const slugRef = useRef();

  const changeHandler = () => {
    const slug = createSlug(nameRef.current.value);
    slugRef.current.value = slug;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("slug", slugRef.current.value);
    formData.append("categoryImage", e.target.categoryImage.files[0]); // Assuming the file input is at 

    axiosApiInstance.post("category/create", formData)
      .then((response) => {
        notify(response.data.msg, response.data.flag)
        if (response.data.flag === 1) {
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl  p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Category / Create</h2>
          <Link
            href="/admin/category"
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
                Category Name
              </label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                onChange={changeHandler}
                placeholder="Enter category name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>

            {/* Slug Input */}
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                Category Slug
              </label>
              <input
                type="text"
                id="slug"
                ref={slugRef}
                readOnly
                placeholder="Slug will be generated automatically"
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none cursor-not-allowed"
              />
            </div>
            <div>
              <label htmlFor="category-image" className="block text-sm font-medium text-gray-700 mb-2">
                Category image
              </label>
              <input
                type="file"
                id="category-image"
                name='categoryImage'
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none cursor-not-allowed"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
              >
                Create Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
