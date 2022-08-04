import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, limit, query, where} from "firebase/firestore"
import ItemList from './ItemList.js';
import Loader from '../Loader/Loader.js'
import "./Item.scss"
const ItemListContainer = ({titulo}) => {

    const [shops, setShops] = useState([]);
    const [loader, setLoader] = useState(true)
    const {category} = useParams()
    
    const [filter, setFilterList] = useState("");
    
    const setFilter = (e) =>{
        const filter = e.target.value
        setFilterList(filter)
        console.log(filter);
    }

    useEffect( () => {
        const db = getFirestore()
        let  q;

        if (filter) {
            q = query(collection(db, "shops"), where("category", "==", filter ))
        } else {
            q = collection (db, "shops")
        }

        getDocs(q).then((snapshot) => {
            const dataExtraida = snapshot.docs.map((datos) => ({id: datos.id, ...datos.data()}) ) 
            setShops(dataExtraida)
            console.log(snapshot);
            setLoader(false)
        })

        // getDocs(q).then((snapshot) => {
        //     if (snapshot.size === 0) {console.log("no resultado");}
        //     setShops(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        // })
    }, [filter])

    // useEffect(() => {
    //     const Product = new Promise ((res) => {
    //         setLoader(true)
    //         setTimeout(() => {
    //             res(category ? products.filter(obj => obj.category === category) : products)
    //         }, 500);
    //     });
    //     Product.then((resProducts) =>{
    //         setShops(resProducts)
    //         setLoader(false)
    //     }).catch((failProducts) => {
    //         alert(failProducts)
    //     })
    // }, [category]);

    return (
    <>
    <h1 className={ loader ? "titulo" : "titulo__cargando"}>{titulo}</h1>
    { loader ? <Loader/> : <ItemList shops={shops} setFilter={setFilter}/>}
    </>
    )
}

export default ItemListContainer;
