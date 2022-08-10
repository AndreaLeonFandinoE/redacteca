import {createContext, useState, useEffect} from 'react'

export const cartContext = createContext()

const Provider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
    }

    const totalCart = () => {
        return cart.reduce((accumulator, itemTotal) => accumulator + itemTotal.quantity, 0)
    }

    useEffect(() => {
        console.log(cart);
        totalCart()
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    const addItem = (shop, quantity) => {

        if (isInCart(shop.id)) {
            setCart(cart.map(item => {
                return item.id === shop.id ? {...item, quantity: item.quantity + quantity} : item
            }))
        } else {
            setCart([...cart, {...shop, quantity}])
        }

    }

    const isInCart= (id) => {
        return cart.some((shop) => shop.id === id) ? true : false
    }

    const removeItem = (id) => {
        const itemFiltered = cart.filter((item) => item.id !== id);
        setCart(itemFiltered);
    };

    const clearAll = () => {
        setCart([]);
    };

    return (
        <cartContext.Provider value={{cart, isInCart, addItem, clearAll, removeItem, totalPrice, totalCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default Provider
