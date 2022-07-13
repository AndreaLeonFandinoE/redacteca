import {useState} from 'react';
import "./Button.scss"
const ButtonCont = ({children, stock, initial}) => {

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
        <div className='button'>
            <button onClick={botonRestar}>-</button>
            <button>{boton}</button>
            <button onClick={botonSumar}>+</button>
            {children}
        </div>
        </>
    )
}

export default ButtonCont