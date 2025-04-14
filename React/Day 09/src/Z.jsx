import React, { useContext } from 'react'
import { StoreContext } from './Context'

export default function Z() {
    const { Setcount, count } = useContext(StoreContext)
    return (
        <div>Z
            <button onClick={() => Setcount(count + 1)}>+</button>
        </div>
    )
}
