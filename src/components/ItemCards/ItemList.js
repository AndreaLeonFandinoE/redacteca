import Item from'./Item.js'
const ItemList = ({shops, setFilter}) => {

    
    return (
        <>
        <div>
            <select onChange={(e) => setFilter(e)}>
                <option value="" key="">Ebooks y Libros</option>
                <option value="Libros" key="1">Libros</option>
                <option value="Ebooks" key="2">Ebooks</option>
            </select>
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