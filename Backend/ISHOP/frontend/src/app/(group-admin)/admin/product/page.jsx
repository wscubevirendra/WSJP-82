import { getProduct } from "@/app/library/api-call";
import ProductBtn from "@/component/admin/ProductBtn";
import React from "react";

const ViewProductPage = async () => {
  const response = await getProduct();
  const products = response?.products;


  return (
    <div className="overflow-x-auto p-4">
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
