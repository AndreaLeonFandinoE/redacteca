import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen} from "@fortawesome/free-solid-svg-icons"

const CartWidget = () => {
    return (
    <FontAwesomeIcon className="cart" icon={faBookOpen} />
    )
}

// const CartWidget = () => {
//     return <span className="material-icons">shopping_cart</span>;
// };

export default CartWidget
