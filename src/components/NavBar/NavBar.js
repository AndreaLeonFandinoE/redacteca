import './NavBar.scss'
import { NavLink } from 'react-router-dom'
const NavBar = ({numero}) => {
    return <header>
        
        <img src="https://res.cloudinary.com/andrealeonfandino/image/upload/v1658416498/samples/redacteca/book-2028349_1280_qykxed.png" alt="logo" />
        <nav>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ?  "nav" : "nav__active"} 
                    to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "nav" : "nav__active"}
                    to="/category/libros">Libros</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "nav" : "nav__active"}
                    to="/category/ebooks">Ebooks</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "nav" : "nav__active"}
                    to="/contacto">Contacto</NavLink>
                </li>
                <li>
                    <NavLink className='cart' to="/cart">{numero}</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default NavBar