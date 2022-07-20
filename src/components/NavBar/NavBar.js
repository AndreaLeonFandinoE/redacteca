import './NavBar.scss'
import { NavLink } from 'react-router-dom'
const NavBar = ({numero}) => {
    return <header>
        <img src="https://res.cloudinary.com/andrealeonfandino/image/upload/v1657678238/samples/redacteca/logoblanco2_zq9w1p.png" alt="logo" />
        <nav>
            <ul>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: "yellowgreen"} : {color: "white"}} 
                    to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: "yellowgreen"} : {color: "white"}}
                    to="/libros">Libros</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: "yellowgreen"} : {color: "white"}}
                    to="/ebooks">Ebooks</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: "yellowgreen"} : {color: "white"}}
                    to="/contacto">Contacto</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive}) => isActive ? {color: "yellowgreen"} : {color: "white"}}
                    className='cart' to="/cart">{numero}</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default NavBar