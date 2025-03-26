import React, { useState } from 'react'
import Input from './Input'
import Display from './Display'

export default function App() {
  const [Tudo, SetTudo] = useState([]);

  function addItem(data) {
    SetTudo([...Tudo, data])

  }

  function removeHandler(i) {
    const newData = Tudo.filter((d, index) => {
      return i != index ? true : false
    })
   SetTudo(newData);

  }


  return (
    <div className='my-container'>
      <Input addItem={addItem} />
      <Display removeHandler={removeHandler} Tudo={Tudo} />
    </div>
  )
}
