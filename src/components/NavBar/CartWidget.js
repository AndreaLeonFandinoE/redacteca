import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen} from "@fortawesome/free-solid-svg-icons"
import {cartContext}  from '../../context/cartContext';
import React, { useContext } from 'react';

const CartWidget = () => {

    const { cart} = useContext(cartContext);
    return (
    <>
    {cart.length === 0 ? <FontAwesomeIcon className="cartWidget" icon={faBookOpen} /> : <> <FontAwesomeIcon className="cartWidget" icon={faBookOpen} /> {cart.length}</> }
    
    </>
    )
    
}

// const CartWidget = () => {
//     return <span className="material-icons">shopping_cart</span>;
// };

export default CartWidget
