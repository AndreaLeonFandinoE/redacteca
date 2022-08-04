import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore, limit, query, where} from "firebase/firestore"
import Loader from '../Loader/Loader.js'
import ItemDetail from "./ItemDetail.js";
const ItemDetailContainer = () => {

    const {id} = useParams()
    const [shop, setShop] = useState();
    const [loader, setLoader] = useState(true)
    
    useEffect( () => {
        const db = getFirestore()

        const shopDoc = doc (db, "shops", id)

        getDoc(shopDoc).then((snapshot) => {
            console.log(snapshot.data);
            setShop(snapshot.data())
            setLoader(false)
        })
    }, [id])


    return (
        <>{ loader ? <Loader/> : <ItemDetail shop={shop}/>}</>
        
    )
}

export default ItemDetailContainer;
