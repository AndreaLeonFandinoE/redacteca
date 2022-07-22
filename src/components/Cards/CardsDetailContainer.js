import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../products/products.js"
import CardsShop from './CardsShop.js';
import Loader from '../Loader/Loader.js'
const CardsDetailContainer = () => {

    const {id} = useParams()
    const [shop, setShop] = useState();
    const [loader, setLoader] = useState(true)

    // const getShop = async () =>{
    //     await fetch (`${products}${id}`, 
    //     {method: "GET", headers: {"Content-Type": "application/json"}})
    //     .then((res) => res.json()).then((shop) => {console.log(shop); setShop(shop)})
    // }
    
    const ofId = () => {
        return new Promise ((resolve) => {
            setLoader(true)
            setTimeout(() => {
                resolve(products.find(obj => obj.id === id))
            },10500)})}

    useEffect(() => {
        ofId().then(res => {
            setLoader(false)
            setShop(res)
        })
        
    }, [id]);

    return (
        <>{ loader ? <Loader/> : <CardsShop shop={shop}/>}</>
        
    )
}

export default CardsDetailContainer;
