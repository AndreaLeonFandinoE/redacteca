
import { Link } from 'react-router-dom'
import Cards from'./Cards.js'
const CardsShop = ({shop}) => {

    return (
        <>
        {shop.map((shop) => (
            <Link style={{textDecoration:"none"}} key={shop.id} to={`/details/${shop.id}`} >
                <Cards shop={shop} key={shop.id}/>
            </Link>
            
        ))
        }
        </>
    )
}

export default CardsShop