import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"
import {cartContext}  from '../../context/cartContext';
import React, { useContext } from 'react';

const CartWidget = () => {

    const { totalCart } = useContext(cartContext);

    return (
        <>
            <FontAwesomeIcon className="cartWidget" icon={faBookOpen} />
            <span>{ totalCart() || "" }</span>
        </>
    )
    
}

export default CartWidget
