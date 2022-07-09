import React from 'react'
import './NavBar.scss'
import logo from '../../logo.svg';
const NavBar = () => {
    return <header>
        <nav>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <ul>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Libros</a>
                    </li>
                    <li>
                        <a href="">Ebooks</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                    <li>
                        <a className='cart' href=""></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}

export default NavBar