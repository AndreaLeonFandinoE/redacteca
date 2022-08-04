import { useState } from "react";
import ItemList from "../ItemCards/ItemList"
import Input from'./Input'
const Buscador = () => {

    const [buscador, setBuscador] = useState("");

    const products = (buscandor) => {
        setBuscador(buscador)
    }

    return (
    
        <div>
            <Input products={products}/>
            <ItemList nombre={buscador}/>
        </div>
    )
}

export default Buscador