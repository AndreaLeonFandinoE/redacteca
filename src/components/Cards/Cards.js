
import "./Cards.scss"
const Cards = ({shop}) => {

    return (
        <div className="cards__cards">
            <img className="cards__img" src={shop.img} alt={shop.alt} />
            <div className="cards__contenido">
                <h4>{shop.name}</h4>
                <span>{shop.description}</span>
                <span>{shop.category}</span>
                <h5>Precio {shop.price}$</h5>
            </div>
        </div>
    )
}

export default Cards;

