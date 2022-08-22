import {useState} from 'react';
import "./ItemCount.scss"
const ItemCount = ({stock, initial = 0, price, onAdd}) => {

    const [boton, setBoton] = useState (initial)

    const botonRestar = () => {
        if (boton > initial) {
            setBoton(boton - 1)
        }
    }

    const botonSumar = () => {
        if (boton < stock) {
            setBoton(boton + 1)
        }
    }

    return (
        <>
            <div className='count'>
                <div className='count__add'>
                    <button onClick={botonRestar}>-</button>
                    <h2>{boton}</h2>
                    <button onClick={botonSumar}>+</button>
                </div>
                <div className='count__total'>
                    <span>Total = $ {boton * price}</span>
                    <button onClick={() => onAdd(boton)}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount