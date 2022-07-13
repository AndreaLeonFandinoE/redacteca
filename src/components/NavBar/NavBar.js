import './NavBar.scss'
const NavBar = ({numero}) => {
    return <header>
        <img src="https://res.cloudinary.com/andrealeonfandino/image/upload/v1657678238/samples/redacteca/logoblanco2_zq9w1p.png" alt="logo" />
        <nav>
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/">Libros</a>
                </li>
                <li>
                    <a href="/">Ebooks</a>
                </li>
                <li>
                    <a href="/">Contacto</a>
                </li>
                <li>
                    <a className='cart' href="/">{numero}</a>
                </li>
            </ul>
        </nav>
    </header>
}

export default NavBar