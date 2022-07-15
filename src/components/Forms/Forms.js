import { useState } from "react"
import "./Forms.scss"
const Forms = () => {
    const registro = () => {
        alert ("Usuario guardado")
    }

    const [form, setForm] = useState({
        name: "",
        lastname: "",
        password: "",
    });

    const handleChange =(e) => {
        console.log(e.target.name);
        setForm({
            ...form,})
    }
    return (
        
        <form className="forms">
            <input className="forms__input" type="text" name="name" placeholder="Escriba su nombre" value={form.name} onChange={handleChange}></input>
            <input className="forms__input" type="text" name="lastname" placeholder="Escriba su apelolido" value={form.lastname} onChange={handleChange}></input>
            <input className="forms__input" type="text" name="password" placeholder="Escriba una contraseña" value={form.password} onChange={handleChange}></input>
            <button onClick={registro}>Registrate</button>
        </form>
        
    )
}

export default Forms