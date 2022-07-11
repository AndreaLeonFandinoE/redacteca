
const Button = ({product, cart}) => {
    return (
    <button onClick={() => cart()}>{product}</button>
)
}

export default Button
