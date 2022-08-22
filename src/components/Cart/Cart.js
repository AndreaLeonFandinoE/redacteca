import React, { useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {cartContext}  from '../../context/cartContext';
import Loader from '../Loader/Loader.js'
import "./Cart.scss"

const Cart = () => {

    const [loader, setLoader] = useState(true)

    const { cart, clearAll, removeItem, totalPrice} = useContext(cartContext);

    useEffect( () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        },500)
    }, [])

    if (cart.length === 0) {
        return (
            <>
                {
                    loader ? <Loader/>
                    : 
                    <div className='item__detail'>
                        <div className='item__contenido'>
                            <h1>Añade productos al carrito. Te ofrezco dos opciones</h1>
                            <ul className='item__contenido'>
                                <li><Link to="/">Volver al inicio</Link></li>
                                <li><Link to="/category/libros">Ver la lista de libros</Link></li>
                                <li><Link to="/category/ebooks">Ver la lista de Ebooks</Link></li>
                            </ul>
                        </div>
                    </div>
                }
            </>
        );
    }
    return (
        <>
            {
                loader ? <Loader/> 
                : 
                <div className='cart'>
                    <div className='cart__container'> 
                        {cart.map((item) => (
                            <div className='cart__items' key={item.id}>
                                <img className='cart__img' src={item.img} alt={item.name} />
                                <div className='cart__content'>
                                    <p><b>{item.name}</b></p>
                                    <p>Precio: $ {item.price}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Total: $ {item.quantity * item.price}</p>
                                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cart__total'>
                        <button onClick={clearAll}>Eliminar todos los productos</button>
                        <h3>Total: $ {totalPrice()}</h3>
                        <Link to="/registro"><button>Finalizar compra</button></Link>
                    </div>
                </div>
            }
        </>
    );
};

export default Cart;