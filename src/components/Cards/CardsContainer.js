import { useEffect } from "react";
import { useState } from "react";
import products from "../../products/products.js"
import CardsShop from './CardsShop.js';

const Cards = ({titulo}) => {

    const [shop, setItems] = useState([]);
    useEffect(() => {
        const Product = new Promise ((res, rej) => {
            setTimeout(() => {
                res(products)
            }, 1200);
        });
        Product.then((resProducts) =>{
            setItems(resProducts)
        }).catch((failProducts) => {
            alert(failProducts)
        })
    }, []);

    return (
    <section className="cards">
        <h2>{titulo}</h2>
        <div className="cards__container">
            <CardsShop shop={shop}/>
        </div>
    </section>
    )
}

export default Cards;
