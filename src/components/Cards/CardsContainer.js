import { useEffect } from "react";
import { useState } from "react";
import products from "../../products/products.js"
import CardsShop from './CardsShop.js';
const CardsContainer = ({titulo}) => {

    const [shop, setShop] = useState([]);
    useEffect(() => {
        const Product = new Promise ((res, rej) => {
            setTimeout(() => {
                res(products)
            }, 1200);
        });
        Product.then((resProducts) =>{
            setShop(resProducts)
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

export default CardsContainer;
