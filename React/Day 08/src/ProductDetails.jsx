import { Star, ShoppingCart, Truck, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, SetProduct] = useState({});
  const { productId } = useParams();
 
  const getProduct = () => {
    axios.get("https://dummyjson.com/products/" + productId).then(
      (response) => {
        SetProduct(response.data)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  useEffect(
    () => {
      getProduct()
    },
    []
  )

  return (
    <div className="max-w-4xl my-10 mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center gap-4 mt-3 text-yellow-500">
        {
          product?.images?.map((path,i)=>{
            return(
              <img src={path} className=" w-[30px] h-[30px]"/>
            )
          })
        }
          </div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-64 h-64 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
        
          <p className="text-xl font-bold text-gray-800 mt-3">${product.price}</p>
          <p className="text-sm text-gray-500">SKU: {product.sku}</p>
          <p className="text-sm text-gray-500">Availability: {product.availabilityStatus}</p>
          <div className="mt-4 flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition">
              <Truck size={18} /> {product.shippingInformation}
            </button>
            <button className="bg-red-200 text-red-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-300 transition">
              <RefreshCcw size={18} /> {product.returnPolicy}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
