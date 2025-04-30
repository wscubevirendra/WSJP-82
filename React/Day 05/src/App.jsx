import React, { useEffect, useState } from 'react'
import Input from './Input'
import Display from './Display'

export default function App() {
  const [name, Setname] = useState("");  ""
  const [movies, Setmovies] = useState([]);

  function inpHandler(value) {
    Setname(value)
  }


  async function getMovies() {
    let APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

    if(name !=""){
      APIURL=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${name}`

    } 

    const response = await fetch(APIURL);
    const data = await response.json()
    Setmovies(data.results)
  }


  useEffect(
    () => {
      getMovies()
    },
    [name]
  )



  return (
    <div className='px-5'>
      <Input inpHandler={inpHandler} />
      <Display movies={movies} />
    </div>
  )
}
