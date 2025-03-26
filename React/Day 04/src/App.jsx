import React, { useEffect, useState } from 'react'

import Item from "./Item"



export default function App() {
  const [recipes, Setrecipes] = useState([]);


  const getProduct = async () => {
    const responce = await fetch("https://dummyjson.com/recipes");
    const data = await responce.json();
    Setrecipes(data.recipes)
    console.log("hello")

  }



  useEffect(
    () => {
      getProduct()
    },
    []
  )




  return (
    <div className='container p-4'>
      <div className="row gy-4">
        {
          recipes.map((data, index) => {
            return (
              <Item key={index} data={data} />
            )
          })
        }



      </div>

    </div>
  )
}




