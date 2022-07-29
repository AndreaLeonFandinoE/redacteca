import {createContext, useState, useEffect} from 'react'

export const cartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const addToCart = (shop, quantity) => {

        if (ifCart(shop.id)) {
            alert ("Este producto se encuentra en el carrito")
        } else {
            setCart([...cart, {...shop, quantity}])
        }

    }

    const ifCart= (id) => {
        return cart.some((valor) => valor.id === id)
    }

    return (
        <cartContext.Provider value={{cart, addToCart}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default Provider
