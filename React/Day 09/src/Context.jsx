import React, { createContext, useState } from 'react'
const StoreContext = createContext();

function Context(props) {
    const [count, Setcount] = useState(10);
    return (
        <StoreContext.Provider value={{ count, Setcount }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Context;
export { StoreContext }
