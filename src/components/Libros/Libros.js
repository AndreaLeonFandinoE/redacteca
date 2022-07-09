import "./Libros.scss"
import "../Button/Button.js"
import "../Products/Products.js"
const Libros = ({children}) => {
    return (
        <>
        <h1>Libros</h1>
        <div>
            <h2>Libro1</h2>
            <p>Este libro trata de como reinventate</p>
            {children}
        </div>

        <div>
            <h2>Libro2</h2>
            <p>Este libro trata de coaching</p>
            {children}
        </div>
        </>
    )
}

export default Libros