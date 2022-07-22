import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import products from "../../products/products.js"
import Loader from '../Loader/Loader.js'
import ItemDetail from "./ItemDetail.js";
const ItemDetailContainer = () => {

    const {id} = useParams()
    const [shop, setShop] = useState();
    const [loader, setLoader] = useState(true)
    const ofId = () => {
        return new Promise ((resolve) => {
            setLoader(true)
            setTimeout(() => {
                resolve(products.find(obj => obj.id === id))
            },500)})}

    useEffect(() => {
        ofId().then(res => {
            setLoader(false)
            setShop(res)
        })
        
    }, [id]);

    return (
        <>{ loader ? <Loader/> : <ItemDetail shop={shop}/>}</>
        
    )
}

export default ItemDetailContainer;
