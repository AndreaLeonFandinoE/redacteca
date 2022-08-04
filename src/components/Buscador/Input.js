import { useState } from "react";

const Input = ({products}) => {

    const [nameProduct, setNameProduct] = useState("");

    const handleSubmitForm = (e) => {
        e.preventDefault()
        products(nameProduct)
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <input type="text" placeholder="Nombre del libro o ebook" 
                onChange={(e) => setNameProduct(e.target.value)} value={nameProduct}/>
            <button>Buscar</button>
            <button onClick={() => setNameProduct("")}>Todos</button>
        </form>
    )
}
export default Input