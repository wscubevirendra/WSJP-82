'use client'

import { FaChevronDown } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BsGlobe, BsTelephone } from "react-icons/bs";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "@/app/library/api-call";
import { lsToCart } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";
import { logoutUser, lsToUser } from "@/redux/features/userSlice";


export default function Header() {
  const router = useRouter()
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatcher = useDispatch()
  console.log(user, "user")

  async function getproduct() {
    const response = await getProduct();
    const products = response?.products || [];
    setProducts(products)
  }

  useEffect(
    () => {
      getproduct(null);
      dispatcher(lsToCart())
      dispatcher(lsToUser())
    },
    []
  )

  function toggleHandler() {
    setToggle(!toggle)
  }


  function checkoutHandler() {
    if (user?.data) {
      router.push("/checkout")
    } else {
      router.push("/login?ref=checkout")
    }


  }


  function logoutHandler() {
    dispatcher(logoutUser());
    router.push("/login")
  }

  return (
    <header className="w-full relative  shadow-sm">
      <div className={`fixed top-0 right-0 z-50 h-full w-[90%] sm:w-[400px] overflow-y-auto bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${toggle ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <div className="flex justify-end p-4 border-b">
          <button
            onClick={toggleHandler}
            className="text-gray-500 hover:text-red-500 text-lg font-bold"
          >
            ×
          </button>
        </div>

        {/* Cart Items List */}
        <div className="overflow-y-auto h-[70%] px-4 py-2 space-y-4">
          {cart?.items.length > 0 ? (
            cart?.items.map((item, index) => {
              const product = products.find((prod) => prod._id === item.productId);
              if (!product) return null;

              return (
                <div
                  key={index}
                  className="flex gap-3 bg-gray-100 rounded-lg p-3 shadow-sm"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${product.thumbnail}`}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-medium text-sm">{product.name}</h3>
                      <p className="text-xs text-gray-500">₹{(product.finalPrice) * (item.qty)}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-2">
                        <button className="bg-red-500 text-white w-6 h-6 rounded hover:bg-red-600">
                          -
                        </button>
                        <span className="text-sm font-medium">{item.qty}</span>
                        <button className="bg-green-500 text-white w-6 h-6 rounded hover:bg-green-600">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-gray-500 mt-20">Your cart is empty</div>
          )}
        </div>

        {/* Cart Summary */}
        <div className="p-4 border-t space-y-2">
          <div className="flex justify-between text-sm">
            <span>Original Total</span>
            <span className="font-semibold">₹{cart?.original_total}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>final Total</span>
            <span className="line-through">₹{cart?.final_total}</span>
          </div>
          <div className="flex justify-between text-sm text-green-600 font-semibold">
            <span>You Save</span>
            <span>-₹{(cart?.original_total) - (cart?.final_total)}</span>
          </div>
          <button onClick={checkoutHandler} className="bg-blue-600 w-full py-2 text-white rounded-md hover:bg-blue-700 mt-3 text-sm font-semibold">
            Proceed to Checkout
          </button>
        </div>
      </div>


      <div className="flex justify-between border-b items-center p-2 px-6 text-sm">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">
            Hotline 24/7
          </div>
          <div className="font-semibold">(025) 3886 25 16</div>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <span className="hover:underline cursor-pointer">Sell on Swoo</span>
          <span className="hover:underline cursor-pointer">Order Tracki</span>
          <div className="flex items-center gap-1 cursor-pointer">
            USD <FaChevronDown className="text-xs" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <img
              src="https://flagcdn.com/us.svg"
              alt="EN"
              className="w-4 h-4 rounded-full"
            />
            Eng <FaChevronDown className="text-xs" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">

          <div className="leading-4">
            {/* <div className="font-bold">SWOO</div>
            <div className="text-xs text-gray-600 font-semibold">TECH MART</div> */}
            <img src="images/logo.png" alt="" />
          </div>
        </div>

        {/* Nav Menu */}
        <nav className="flex items-center gap-6 font-semibold">
          <div className="flex items-center gap-1 cursor-pointer">
            <Link href="/">HOME</Link>

          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <Link href="/store">STORE</Link>


          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <Link href="/">PRODUCT</Link>


          </div>
          <div className="cursor-pointer">
            <Link href="/contact">CONTACT</Link>

          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <div className="text-right">

            {
              user.data != null ?
                <>
                  <div className="text-xs text-gray-500">NAME</div>
                  <div onClick={logoutHandler} className="font-semibold cursor-pointer hover:underline">
                    LOGOUT
                  </div>
                </>

                :
                <>
                  <div className="text-xs text-gray-500">WELCOME</div>
                  <Link href="/login?ref=header">
                    <div className="font-semibold cursor-pointer hover:underline">
                      LOG IN / REGISTER
                    </div>
                  </Link>


                </>
            }


          </div>

          <div onClick={toggleHandler} className="relative flex items-center gap-2 cursor-pointer">
            <div className=" relative bg-teal-500 p-2 rounded-full">
              <FiShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart?.items.length}
              </span>

            </div>

            <div className="font-semibold">$1,689.00</div>
          </div>
        </div>
      </div>
    </header >
  );
}
