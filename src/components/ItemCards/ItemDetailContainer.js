import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"
import Loader from '../Loader/Loader.js'
import ItemDetail from "./ItemDetail.js";
const ItemDetailContainer = () => {

    const {id} = useParams()
    const [shop, setShop] = useState({});
    const [loader, setLoader] = useState(true)
    
    useEffect( () => {
        const db = getFirestore()
        const shopDoc = doc (db, "shops", id)
        getDoc(shopDoc).then((res) => {
            setShop({id: res.id, ...res.data()})
            setLoader(false)
        })
    }, [id])

    return (
        <>{ loader ? <Loader/> : <ItemDetail shop={shop}/>}</>
    )
}

export default ItemDetailContainer;
