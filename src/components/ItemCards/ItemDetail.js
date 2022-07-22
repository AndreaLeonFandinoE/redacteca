import Count from '../Count/Count.js'
import './Item.scss'

const ItemDetail = ({shop}) => {
    const {name, img, alt, category, autor, price, description, stock} = shop
    
    const onAdd = (item) => {
        alert("seleccionaste", item, "shops")
    }
    return (
        <div className="item__detail">
            <img className="item__img-detail" src={img} alt={alt} />
            <div className="item__contenido">
                <h1>{name}</h1>
                <span>{category}</span>
                <span>{autor}</span>
                <h5>Precio ${price}</h5>
                <p>{description}</p>
                <Count stock={stock} price={price} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail