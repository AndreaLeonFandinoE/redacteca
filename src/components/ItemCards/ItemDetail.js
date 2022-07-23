import ItemCount from '../ItemCount/ItemCount.js'
import './Item.scss'
import { useState} from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({shop}) => {
    const [boton, setBoton] = useState(0)

    const onAdd = (boton) => {
        setBoton(boton)
        alert("agregaste", boton, "cantidades");
        
    }

    return (
        <div className="item__detail">
            <img className="item__img-detail" src={shop.img} alt={shop.alt} />
            <div className="item__contenido">
                <h1>{shop.name}</h1>
                <span>{shop.category}</span>
                <span>{shop.autor}</span>
                <h5>Precio ${shop.price}</h5>
                <p>{shop.description}</p>
                {boton === 0 ? <ItemCount stock={shop.stock} price={shop.price} onAdd={onAdd}/> : <Link to="/cart"><button>Ver carrito</button></Link>}
            </div>
        </div>
    )
}

export default ItemDetail