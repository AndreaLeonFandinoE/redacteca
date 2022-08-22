import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <footer>
                <section className="container">
                    <h1>RedacTeca</h1>
                    <span>&copy;{new Date().getFullYear()} Copyright 2022 - RedacTeca</span>
                    <span>Todos los derechos reservados</span>
                </section>
            </footer>
        </>
    );
};

export default Footer;