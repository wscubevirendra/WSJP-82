import React, { useContext } from 'react'
import E from './E'
import { StoreContext } from './Context'

export default function D() {
 const {count}= useContext(StoreContext)
  return (
    <div>D :{count}
      <E/> 
    </div>
  )
}
