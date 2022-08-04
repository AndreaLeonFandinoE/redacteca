import Item from'./Item.js'
import { addDoc, collection, getFirestore} from 'firebase/firestore'
const ItemList = ({shops, setFilter}) => {

    const createOrder = (e) => {
        e.preventDefault()
        const db = getFirestore()
        const orderCollectionQ = collection(db, "orders")

        const order = {
            buyer: {name: "Andrea", phone: 1137970044, email: "andrealeonfandino@gmail.com"},
            shops: shops.map((item) => ({name: item.name, price: item.price})),
            total: shops.reduce((acc, item) => acc + item.price, 0),
            date: shops.map((date) => (date))
        }

        addDoc(orderCollectionQ, order).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <>
        <div>
            <select onChange={(e) => setFilter(e)}>
                <option value="" key="">Ebooks y Libros</option>
                <option value="Libros" key="1">Libros</option>
                <option value="Ebooks" key="2">Ebooks</option>
            </select>
            <button onClick={createOrder}>Crear orden</button>
        </div>
        <div className='item'>
            {shops.map((shop) => (
                <Item key={shop.id} {...shop}/>
            ))
            } 
        </div>
        </>
        
    )
}

export default ItemList