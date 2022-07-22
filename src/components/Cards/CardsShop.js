

import Cards from'./Cards.js'
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