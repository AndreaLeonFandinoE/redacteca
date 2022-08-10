import React, { useContext } from 'react';
import { addDoc, collection, getFirestore} from 'firebase/firestore'
import { Link } from 'react-router-dom';
import {cartContext}  from '../../context/cartContext';
import "./Cart.scss"

const Cart = () => {

    const { cart, clearAll, removeItem, totalPrice} = useContext(cartContext);

    const order = {
        buyer: {name: "Andrea", phone: 1137970044, email: "andrealeonfandino@gmail.com"},
        shops: cart.map((item) => ({name: item.name, price: item.price, quantity: item.quantity, id: item.id})),
        total: totalPrice(),
        
    }

    const shoppingCart = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    };

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
                        <p>{item.name}</p>
                        <p>Precio: $ {item.price}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Subtotal: $ {item.quantity * item.price}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
            <div className='cart__total'>
                <button onClick={clearAll}>Eliminar todos los productos</button>
                <h3>Total: $ {totalPrice()}</h3>
                <button onClick={shoppingCart}>Finalizar compra</button>
            </div>
        </div>
        
    );
};

export default Cart;