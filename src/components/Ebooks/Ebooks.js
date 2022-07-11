import {useState} from 'react';
import "../Button/Button.js"
import "../Products/Products.js"
const Ebooks = ({children, stock, initial}) => {

    const [ebookVida, setebookVida] = useState (initial)
    const botonRestar = () => {
        if (ebookVida > initial) {
            setebookVida(ebookVida - 1)
        }
    }

    const botonSumar = () => {
        if (ebookVida < stock) {
            setebookVida(ebookVida + 1)
        }
    }

    return (
        <>
        <h1>E-books</h1>

        <div>
            <h2>¿Estás viviendo tu vida o la de alguien más?</h2>
            <p>
                Todos queremos vivir la vida que soñamos, sin embargo con el tiempo nos dejamos envolver por las personas que nos rodean y comenzamos a adoptar posturas y actitudes que no son realmente nuestras y vamos perdiendo nuestra esencia.
                Este e-book cuenta con características que te pueden ayudar a revisar si estás o no viviendo tu propia vida, además incluye un ejercicio de preguntas poderosas para que inicies tu proceso de autoconocimiento.
                "Descubre tu autodescubrimiento y si es necesario regresa al camino correcto (...) Lo que no conocemos no podemos cambiarlo", Rosa León.</p>
            <button onClick={botonRestar}>-</button>
            <button>{ebookVida}</button>
            <button onClick={botonSumar}>+</button>
            {children}
        </div>
        </>
    )
}

export default Ebooks