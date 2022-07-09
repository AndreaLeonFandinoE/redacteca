
import "./Forms.scss"
const Forms = ({children}) => {
    const registro = () => {
        alert ("Usuario guardado")
    }
    return (
        <>
        {children}
        <form className="forms">
            <input className="forms__input" placeholder="Escriba su nombre"></input>
            <input className="forms__input" placeholder="Escriba su email"></input>
            <input className="forms__input" placeholder="Escriba su contraseña"></input>
            <button onClick={registro}>Registrate</button>
        </form>
        </>
    )
}

export default Forms