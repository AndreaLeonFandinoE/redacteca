import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {cartContext}  from '../../context/cartContext';
import "./Cart.scss"

const Cart = () => {

    const { cart, clearAll, removeItem, total } = useContext(cartContext);

    if (cart.length === 0) {
        return (
            <>
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
            </>
        );
    }
    return (
            <div className='cart'>
            {cart.map((item) => (
                <div className='cart__container' key={item.id}>
                    <img className='cart__img' src={item.img} alt={item.name} />
                    <div>
                        <h2>{item.name}</h2>
                        <h2>Precio: $ {item.price}</h2>
                    </div>
                    <button onClick={() => removeItem(item.id)}>Eliminar este producto</button>
                    <span>Agregaste {item.quantity} productos de "{item.name}"</span>
                </div>
            ))}
            <div className='cart__total'>
                <button onClick={clearAll}>Eliminar todos los productos</button>
                <h3>Total: $ {total}</h3>
            </div>
        </div>
        
    );
};

export default Cart;