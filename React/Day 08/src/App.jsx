import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './Product'
import Layout from './Layout'
import ProductDetails from './ProductDetails'

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
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
