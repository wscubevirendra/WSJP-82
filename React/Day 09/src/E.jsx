import React, { useContext } from 'react'
import { StoreContext } from './Context'

export default function E() {
    const { count } = useContext(StoreContext)
    return (
        <div>E:{count}</div>
    )
}
