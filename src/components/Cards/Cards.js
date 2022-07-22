import {Link} from "react-router-dom"
import "./Cards.scss"
const Cards = ({shop}) => {

    return (
        <div className="cards__cards">
            <img className="cards__img" src={shop.img} alt={shop.alt} />
            <div className="cards__contenido">
                <h4>{shop.name}</h4>
                <span>{shop.category}</span>
                <span>{shop.autor}</span>
                <h5>Precio ${shop.price}</h5>
                <Link to={`/details/${shop.id}`}><button>Saber más</button></Link>
            </div>
        </div>
    )
}

export default Cards;

