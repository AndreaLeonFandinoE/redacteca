import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../products/products.js"
import CardsShop from './CardsShop.js';
import Loader from '../Loader/Loader.js'
const CardsContainer = ({titulo}) => {

    const [shop, setShop] = useState([]);
    const [loader, setLoader] = useState(true)
    const {category} = useParams()
    useEffect(() => {
        const Product = new Promise ((res) => {
            setLoader(true)
            setTimeout(() => {
                res(category ? products.filter(obj => obj.category === category) : products)
            }, 1000);
        });
        Product.then((resProducts) =>{
            setShop(resProducts)
            setLoader(false)
        }).catch((failProducts) => {
            alert(failProducts)
        })
    }, [category]);

    return (
    <>{ loader ? <Loader/> : <CardsShop shop={shop}/>}</>
    )
}

export default CardsContainer;
