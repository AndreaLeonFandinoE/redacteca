import { Fragment} from "react"
import { FormsItem } from "./FormsItem.js"
import "./Forms.scss"
const Forms = () => {

    const forms = {
        name: "",
        lastname: "",
        email: "",
        password: "",
    };

    const { form, handleChange, modalMessage} = FormsItem(
        forms,
    );

    const sendForm = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <Fragment>
            <form className="forms" onSubmit={sendForm}>
                    <input className="forms__input" type="text" name="name" placeholder="Escriba su nombre" 
                        value={form.name} onChange={handleChange}
                    />
                    <input className="forms__input" type="text" name="lastname" placeholder="Escriba su apellido" 
                        value={form.lastname} onChange={handleChange}
                    />
                    <input className="forms__input" type="email" name="email" placeholder="Escriba su correo" 
                        value={form.email} onChange={handleChange}
                    />
                    <input className="forms__input" type="text" name="password" placeholder="Escriba una contraseña" 
                        value={form.password} onChange={handleChange}
                    />
                    <div>Nunca compartiremos tus datos.</div>
                <div >
                    <input type="checkbox" />
                    <label>Recordarme</label>
                </div>
                <button onClick={modalMessage} type="submit">Registrarme</button>
            </form>
        </Fragment>
        </>
    )
}

export default Forms