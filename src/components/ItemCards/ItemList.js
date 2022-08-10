import Item from'./Item.js'
import { addDoc, collection, getFirestore} from 'firebase/firestore'
const ItemList = ({shops}) => {

    return (
        <>
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