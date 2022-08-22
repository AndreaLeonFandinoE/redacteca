import Item from'./Item.js'
const ItemList = ({shops}) => {

    return (
        <>
            <div className='item'>
                {shops.map((shop) => (
                    <Item key={shop.id} {...shop}/>
                ))} 
            </div>
        </>
        
    )
}

export default ItemList