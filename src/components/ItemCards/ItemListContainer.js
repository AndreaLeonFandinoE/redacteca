import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../products/products.js"
import ItemList from './ItemList.js';
import Loader from '../Loader/Loader.js'
import "./Item.scss"
const ItemListContainer = ({titulo}) => {

    const [shops, setShops] = useState([]);
    const [loader, setLoader] = useState(true)
    const {category} = useParams()
    useEffect(() => {
        const Product = new Promise ((res) => {
            setLoader(true)
            setTimeout(() => {
                res(category ? products.filter(obj => obj.category === category) : products)
            }, 500);
        });
        Product.then((resProducts) =>{
            setShops(resProducts)
            setLoader(false)
        }).catch((failProducts) => {
            alert(failProducts)
        })
    }, [category]);

    return (
    <>
    <h1 className={ loader ? "titulo" : "titulo__cargando"}>{titulo}</h1>
    { loader ? <Loader/> : <ItemList shops={shops}/>}</>
    )
}

export default ItemListContainer;
