import './NavBar.scss'
const NavBar = () => {
    return <header>
        <img src="../../logo2.png" alt="logo" />
        <img src="../../logo.png" alt="logo" />
        <img src="../../logoblanco.png" alt="logo" />
        <img src="../../logoblanco2.png" alt="logo" />
        <nav>
            <ul>
                <li>
                    <a href="#!">Inicio</a>
                </li>
                <li>
                    <a href="#!">Libros</a>
                </li>
                <li>
                    <a href="#!">Ebooks</a>
                </li>
                <li>
                    <a href="#!">Contacto</a>
                </li>
                <li>
                    <a className='cart' href="#!"></a>
                </li>
            </ul>
        </nav>
    </header>
}

export default NavBar