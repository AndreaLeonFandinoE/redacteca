
import Portal from "./Portal"

const Modal = () => {
    const {children, toggle, active} = this.props
    
    return(
        <Portal>
            {active && (
                <div>
                    <button onClick={toggle}>X</button>
                    <div>{children}</div>
                </div>
            )}
        </Portal>
    )
}

export default Modal