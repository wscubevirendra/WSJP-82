import { getProduct } from "@/app/library/api-call";
import ProductBtn from "@/component/admin/ProductBtn";
import React from "react";
import { FiEdit, FiPlus } from "react-icons/fi";
import Link from "next/link";

const ViewProductPage = async () => {
  const response = await getProduct();
  const products = response?.products;


  return (
    <div className="overflow-x-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Product/View</h2>

        <Link className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition" href="/admin/product/add">  <FiPlus className="text-lg" />
          Add product</Link>

      </div>
      <table className="min-w-full text-sm text-left bg-white rounded-xl shadow-md">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Slug</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Thumbnail</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {products.map((product, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-3">{product.name}</td>
              <td className="px-4 py-3">{product.slug}</td>
              <td className="px-4 flex gap-2 py-3">
                <span>₹{product.originalPrice}</span>
                <span>%{product.discountPercentage}</span>
                <span>₹{product.finalPrice}</span>
              </td>
              <td className="px-4 py-3">
                {product.thumbnail ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${product.thumbnail}`}
                    alt="thumb"
                    className="h-10 w-10 object-cover rounded"
                  />
                ) : (
                  <span className="text-gray-400 italic">N/A</span>
                )}
              </td>
              <ProductBtn product={product} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProductPage;
