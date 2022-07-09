import "./Forms.scss"
const Forms = ({children}) => {
    return (
        <>
        {children}
        <div className="forms">
            <input className="forms__input" placeholder="Escriba su nombre"></input>
            <input className="forms__input" placeholder="Escriba su email"></input>
            <input className="forms__input" placeholder="Escriba su contraseña"></input>
            <button>Registrarme</button>
        </div>
        </>
    )
}

export default Forms