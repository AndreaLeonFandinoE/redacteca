import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../products/products.js"
import CardsShop from './CardsShop.js';
const CardsDetailContainer = () => {

    const {id} = useParams()
    const [shop, setShop] = useState(null);

    const getShop = async () =>{
        await fetch (`${products}${id}`, 
        {method: "GET", headers: {"Content-Type": "application/json"}})
        .then((res) => res.json()).then((shop) => {console.log(shop); setShop(shop)})
    }
    
    useEffect(() => {
        console.log(id);
        getShop()
    }, [id]);

    return (
    <section className="cards">
        <div className="cards__container">
            {shop !== null && <CardsShop shop={shop}/>}
        </div>
    </section>
    )
}

export default CardsDetailContainer;
