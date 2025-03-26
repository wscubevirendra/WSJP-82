import React from 'react'
import Home from './pages/Home'
import About from "./pages/About"
import Contact from './pages/Contact'
import Services from './pages/Services'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />

        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/services",
          element: <Services />
        }
      ]


    },


  ])
  return (
    <RouterProvider router={router} />

  )
}
