'use client';
import { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { axiosApiInstance, createSlug } from '@/app/library/helper';
import Select from 'react-select'

export default function AddProductForm() {
  const [category, setCategory] = useState();
  const [color, setColor] = useState();
  const [selColors, setSelColors] = useState([])
  const nameRef = useRef();
  const slugRef = useRef();
  const originalPriceRef = useRef();
  const discountPriceRef = useRef();
  const finalPriceRef = useRef();

  const fetchData = () => {
    axiosApiInstance.get("category").then(
      (response) => {
        if (response.data.flag == 1) {
          setCategory(response?.data?.categories)
        }
      }
    ).catch(
      () => {
        setCategory([])

      }

    )
  }


  const fetchColor = () => {
    axiosApiInstance.get("color").then(
      (response) => {
        if (response.data.flag == 1) {
          setColor(response?.data?.colors)
        }
      }
    ).catch(
      () => {
        setColor([])

      }

    )
  }




  const changeHandler = () => {
    const slug = createSlug(nameRef.current.value);
    slugRef.current.value = slug;
  };

  const finalPrice = () => {
    const op = originalPriceRef.current.value;
    const dp = discountPriceRef.current.value;

    const final = Math.floor(op - op * (dp / 100));
    finalPriceRef.current.value = final;



  }


  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("slug", slugRef.current.value);
    formData.append("shortDescription", e.target.shortDesc.value);
    formData.append("longDescription", e.target.longDesc.value);
    formData.append("originalPrice", originalPriceRef.current.value);
    formData.append("discountPercentage", discountPriceRef.current.value);
    formData.append("finalPrice", finalPriceRef.current.value);
    formData.append("categoryId", e.target.categoryId.value)
    formData.append("colors", JSON.stringify(selColors))
    formData.append("thumbnail", e.target.productImage.files[0])

    axiosApiInstance.post("product/create", formData).then(
      (response) => {
        console.log(response)
      }

    ).catch(
      (err) => {
        console.log(err)
      }
    )


  }



  useEffect(
    () => {
      fetchData()
      fetchColor()
    },
    []
  )
  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Add a New Product</h2>
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="productName" className="text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                ref={nameRef}
                onChange={changeHandler}
                name="productName"
                placeholder="Enter product name"
                required
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
              />
            </div>
            <div>
              <label htmlFor="productSlug" className="text-sm font-medium text-gray-700">
                Product Slug
              </label>
              <input
                type="text"
                id="productSlug"
                ref={slugRef}
                name="productSlug"
                readOnly
                placeholder="example-product-name"
                required
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="originalPrice" className="text-sm font-medium text-gray-700">
                Original Price
              </label>
              <input
                type="number"
                id="originalPrice"
                name="originalPrice"
                ref={originalPriceRef}
                onChange={finalPrice}
                placeholder="1000"
                required
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
              />
            </div>
            <div>
              <label htmlFor="discountPrice" className="text-sm font-medium text-gray-700">
                Discount Price
              </label>
              <input
                type="number"
                id="discountPrice"
                name="discountPrice"
                ref={discountPriceRef}
                onChange={finalPrice}
                placeholder="800"
                required
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
              />
            </div>
            <div>
              <label htmlFor="finalPrice" className="text-sm font-medium text-gray-700">
                Final Price
              </label>
              <input
                type="number"
                id="finalPrice"
                name="finalPrice"
                ref={finalPriceRef}
                readOnly
                placeholder="750"
                required
                className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="text-sm font-medium text-gray-700">
                Category
              </label>
              <Select
                name="categoryId"
                options={
                  category?.map(
                    (cat, i) => {
                      return { value: cat._id, label: cat.name }
                    }
                  )

                } />

            </div>
            <div>
              <label htmlFor="color" className="text-sm font-medium text-gray-700">
                Color
              </label>
              <Select
                onChange={
                  (color) => {
                    const selColor = color.map(o => o.value)
                    setSelColors(selColor)

                  }
                }
                isMulti
                closeMenuOnSelect={false}
                options={
                  color?.map(
                    (col, i) => {
                      return { value: col._id, label: col.name }
                    }
                  )

                } />
            </div>
          </div>

          <div>
            <label htmlFor="shortDesc" className="text-sm font-medium text-gray-700">
              Short Description
            </label>
            <textarea
              id="shortDesc"
              name="shortDesc"
              rows="3"
              placeholder="Brief description of the product"
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
            ></textarea>
          </div>

          <div>
            <label htmlFor="longDesc" className="text-sm font-medium text-gray-700">
              Long Description
            </label>
            <textarea
              id="longDesc"
              name="longDesc"
              rows="6"
              placeholder="Detailed information about the product"
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
            ></textarea>
          </div>

          <div>
            <label htmlFor="productImage" className="text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              required
              className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600 p-3"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition"
            >
              <FaPlus />
              Add Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
