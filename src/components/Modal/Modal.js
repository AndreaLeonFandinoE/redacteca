import "./Modal.scss"
const Modal = ({cancel}) => {
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__x">
                    <button onClick={() => cancel(false)}> X </button>
                </div>
                <div className="modal__body">
                    <p>Body</p>
                    <button id="cancel" onClick={() => cancel(false)}>Cancelar</button>
                    <button>Ver carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Modal