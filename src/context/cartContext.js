import {createContext, useState, useEffect} from 'react'

export const cartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    const addItem = (shop, quantity) => {

        if (isInCart(shop.id)) {
            alert ("Este producto se encuentra en el carrito")
        } else {
            setCart([...cart, {...shop, quantity}])
        }

    }

    const isInCart= (id) => {
        return cart.some((shop) => shop.id === id)
    }

    const removeItem = (id) => {
        const producs = cart.filter((item) => item.id !== id);
        setCart(producs);
    };

    const clearAll = () => {
        setCart([]);
    };

    return (
        <cartContext.Provider value={{cart, addItem, clearAll, removeItem}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default Provider
