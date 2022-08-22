import {Link} from "react-router-dom"
import "./Item.scss"
const Item = ({name, img, alt, category, autor, price, id}) => {

    return (
        <div className="item__cards">
            <img className="item__img" src={img} alt={alt} />
            <div className="item__contenido">
                <h4>{name}</h4>
                <h5>Precio ${price}</h5>
                <span>Categoría: {category}</span>
                <span>Escrito por: {autor}</span>
                <Link to={`/details/${id}`}>
                    <button>Saber más</button>
                </Link>
            </div>
        </div>
    )
}

export default Item;

