import "./Footer.scss";

const Footer = () => {
    return (
        <>
            <footer>
                <section>
                    <img src="https://res.cloudinary.com/andrealeonfandino/image/upload/v1658416498/samples/redacteca/book-2028349_1280_qykxed.png" alt="logo"/>
                    <span>&copy; {new Date().getFullYear()} RedacTeca. Todos los derechos reservados</span>
                    <span>RedacTeca es un servicio de pago, su contenido está sujeto a disponibilidad. El servicio es comercializado por Andrea León (Argentina).</span>
                </section>
            </footer>
        </>
    );
};

export default Footer;