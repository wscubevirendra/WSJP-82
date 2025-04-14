import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './Product'
import Layout from './Layout'
import ProductDetails from './ProductDetails'
import Cart from './Cart'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/:categorySlug?",
          element: <Product />
        },
        {
          path: "/productDetails/:productId",
          element: <ProductDetails />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
