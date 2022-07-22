import {useState} from 'react';
const Count = ({children, stock, initial = 0, price, onAdd}) => {

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
        <div>
            <button onClick={botonRestar}>-</button>
            <h3>{boton}</h3>
            <button onClick={botonSumar}>+</button>
        </div>
        <span>Total = ${boton * price}</span>
        {children}
        <button onClick={() => onAdd(boton)}>Agregar al carrito</button>
        </>
    )
}

export default Count