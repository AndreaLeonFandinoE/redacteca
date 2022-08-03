import {useState} from 'react';
import "./Count.scss"
// import Modal from "../Modal/Modal.js"
const ItemCount = ({children, stock, initial = 0, price, onAdd}) => {

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

    // const [modal, setModal] = useState(false);

    return (
        <>
        <div className='count'>
            <div className='count__add'>
                <button onClick={botonRestar}>-</button>
                <h3>{boton}</h3>
                <button onClick={botonSumar}>+</button>
            </div>
            <div className='count__total'>
                <span>Total = $ {boton * price}</span>
                {children}
                <button onClick={() => onAdd(boton)}>Agregar al carrito</button>
                {/* <button onClick={() =>setModal(true)}>Agregar al carrito</button>
                {modal && <Modal cancel={setModal}/>} */}
            </div>
        </div>
        </>
    )
}

export default ItemCount