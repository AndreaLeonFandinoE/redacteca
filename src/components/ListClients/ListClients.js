import {useEffect, useState} from "react";
import Forms from "../Forms/Forms.js";

const url = "https://62ccbd928042b16aa7d33ae3.mockapi.io/api/users"
const ListClients = ({children}) => {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        getClients()
    }, []);

    useEffect(() => {
        clients.length > 0 && console.log(clients);
    }, [clients]);

    const getClients = async () => {
        await fetch(url)
        .then((res) => {
            return res.json()
        }).then(newRes => {
            setClients(newRes)
        }).catch((fall) => console.log(fall))
    }

    const deleteClient = async (id) => {
        console.log(id);
        await fetch (`${url}/${id}`, { method: "DELETE" ,})
        .then(() => {
            getClients()
        })
    }

    return (
    <div>
        {children}
        <Forms/>
        <ul>
        {clients.map((client) => (
            <li key={client.id}>
                <span>{client.name}</span>
                <span>{client.lastname}</span>
                <span>{client.password}</span>
                <button onClick={() => deleteClient(client.id)}>Borrar</button>
            </li>
        ))}
        </ul>
    </div>
)
}

export default ListClients
