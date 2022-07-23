
const Client = ({name, lastname, password, id}) => {
return (
    <div>
        <ul>
            <li key={id}>
                <span>{name}</span>
                <span>{lastname}</span>
                <span>{password}</span>
            </li>
        </ul>
    </div>
)
}

export default Client