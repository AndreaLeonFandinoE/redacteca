import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import ItemList from './ItemList.js';
import Loader from '../Loader/Loader.js'
import "./Item.scss"
import { useParams } from "react-router-dom";
const ItemListContainer = ({titulo}) => {

    const [shops, setShops] = useState([]);
    const [loader, setLoader] = useState(true)
    const {category} = useParams()
    

    useEffect( () => {
        const db = getFirestore()
        let  q;

        if (category) {
            q = query(collection(db, "shops"), where("category", "==", category ))
        } else {
            q = collection (db, "shops")
        }

        getDocs(q).then((res) => {
            const dataExtraida = res.docs.map((datos) => ({id: datos.id, ...datos.data()}) ) 
            setShops(dataExtraida)
            console.log(res);
            setLoader(false)
        })

    }, [category])

    return (
    <>
    <h1 className={ loader ? "titulo" : "titulo__cargando"}>{titulo}</h1>
    { loader ? <Loader/> : <ItemList shops={shops}/>}
    </>
    )
}

export default ItemListContainer;
