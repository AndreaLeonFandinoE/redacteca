import ItemCount from '../ItemCount/ItemCount.js'
import './Item.scss'
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import {cartContext} from '../../context/cartContext.js'

const ItemDetail = ({shop}) => {
    const [quantity, setQuantity] = useState(0)

    const {addItem} = useContext(cartContext)

    const onAdd = (quantity) => {
        setQuantity(quantity)
        addItem(shop, quantity)
    }

    return (
        <div className="item__detail">
            <img className="item__img-detail" src={shop.img} alt={shop.alt} />
            <div className="item__contenido">
                <h1>{shop.name}</h1>
                <p>{shop.description}</p>
                <span>Categoría: {shop.category}</span>
                <span>Autor: {shop.autor}</span>
                <p><b>Precio ${shop.price}</b></p>
                {quantity === 0 ? 
                    <ItemCount stock={shop.stock} price={shop.price} onAdd={onAdd}/> 
                    : 
                    <>
                        <Link to="/cart">
                            <button>Ir al carrito</button>
                        </Link>
                        <h4>
                            Añadiste {quantity} {shop.category} de <b><i>{shop.name}</i></b>.
                        </h4>
                    </>
                }
                <Link to="/">
                    <button>Seguir comprando</button>
                </Link>
            </div>
        </div>
    )
}

export default ItemDetail