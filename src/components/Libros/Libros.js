import {useState} from 'react';
import "./Libros.scss"
import "../Button/Button.js"
import "../Products/Products.js"
const Libros = ({children, stock, initial}) => {

    const [viejaYo, setviejaYo] = useState (initial)
    const botonRestar = () => {
        if (viejaYo > initial) {
            setviejaYo(viejaYo - 1)
        }
    }

    const botonSumar = () => {
        if (viejaYo < stock) {
            setviejaYo(viejaYo + 1)
        }
    }

    return (
        <>
        <h1>Libros</h1>

        <div>
            <h2>¿Vieja Yo?</h2>
            <p>Este libro trata de como reinventate después de los 50 años</p>
            <button onClick={botonRestar}>-</button>
            <button>{viejaYo}</button>
            <button onClick={botonSumar}>+</button>
            {children}
        </div>

        </>
    )
}

export default Libros