import React, { createContext, useState, useEffect } from 'react'
const StoreContext = createContext()
import axios from 'axios';

export default function Context(props) {
    const [allProduct, SetallProduct] = useState([]);
    const [cart, SetCart] = useState([]);
    useEffect(
        () => {
            let API = axios.get("https://dummyjson.com/products")
            API.then(
                (response) => {
                    SetallProduct(response.data.products)
                }

            ).catch(
                (error) => {
                    SetallProduct([])

                }
            )
        },
        []
    )

    const addToCart = (id) => {
        const product = allProduct.find((prod) => prod.id == id);
        if (product) {
            const cartProduct = cart.find((cd) => cd.id == id);
            if (cartProduct) {
                const updateCart = cart.map(
                    (item) => {
                        return item.id == id ? { ...item, qty: item.qty + 1 } : item
                    }
                )

                SetCart(updateCart)

            } else {
                SetCart([...cart, { ...product, qty: 1 }])
            }

        }

    }

    const qtyHandler = (id, flag) => {
        let updateCart;
        const product = allProduct.find((prod) => prod.id == id);
        if (product) {
            const cartProduct = cart.find((cd) => cd.id == id);
            if (cartProduct) {
                if (flag == 1) {
                    updateCart = cart.map(
                        (item) => {
                            return item.id == id ? { ...item, qty: item.qty + 1 } : item
                        }
                    )
                } else {
                    updateCart = cart.map(
                        (item) => {
                            return item.id == id ? { ...item, qty: item.qty - 1 } : item
                        }
                    )
                }


                SetCart(updateCart)

            }
        }

    }

    return (
        <StoreContext.Provider value={{ addToCart, cart, qtyHandler }}>
            {props.children}
        </StoreContext.Provider>
    )

}

export { StoreContext }
