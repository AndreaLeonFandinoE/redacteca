import ReactDOM from 'react-dom';
import { componentDidMount, componentWillUnmount } from 'react';

const portalRoot = document.getElementById("portal")

const Portal = (props) => {

    constructor = () => {
        props.el = document.createElement("div")
    }

    componentDidMount = () => {
        portalRoot.appendChild(props.el)
    }

    componentWillUnmount = () => {
        portalRoot.removeChild(props.el)
    }

        const {children} = props
        
        return ReactDOM.createPortal(children, props.el)
    
}

export default Portal