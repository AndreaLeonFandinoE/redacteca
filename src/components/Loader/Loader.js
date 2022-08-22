import './Loader.scss'

const Loader = () => {
    return (
        <div className='lds-ripple__container'>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
        
    )
}

export default Loader