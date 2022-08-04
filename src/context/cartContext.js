import {createContext, useState, useEffect} from 'react'

export const cartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const totalCart = () => {
        let total = 0
        cart.forEach(item => total += (item.price*item.stock))
        setTotal(total)
    }

    useEffect(() => {
        console.log(cart);
        totalCart()
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
        const itemFiltered = cart.filter((item) => item.id !== id);
        setCart(itemFiltered);
    };

    const clearAll = () => {
        setCart([]);
    };

    return (
        <cartContext.Provider value={{cart, addItem, clearAll, removeItem, total}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default Provider
