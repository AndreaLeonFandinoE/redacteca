import Cards from'./Cards'

const CardsShop = ({shop}) => {
    return (
        <>
        {shop.map((shop) => (
            <Cards shop={shop} key={shop.id}/>
        ))
        }
        </>
    )
}

export default CardsShop