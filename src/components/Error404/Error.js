import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.scss"

const Error = () => {
    return (
        <div class="error">
            <div className="error__404">
                <h1>Error 404</h1>
                <h2>Esta página no existe</h2>
                <h3>asegúrate de escribir correctamente la URL</h3>
                <Link to="/">
                    <button>Volver a la página principal</button>
                </Link>
            </div>
            <img className="error__img" src="https://res.cloudinary.com/andrealeonfandino/image/upload/v1660108177/samples/redacteca/libro-o-cuaderno-con-404-pagina-rasgada-2a4t6ak_ixhsn4.jpg" alt="404"/>
        </div>
    )
}

export default Error