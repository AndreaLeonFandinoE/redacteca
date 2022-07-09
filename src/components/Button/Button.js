
const Button = ({libro, botonLibro}) => {
    return (
    <button onClick={() => botonLibro()}>{libro}</button>
)
}

export default Button
