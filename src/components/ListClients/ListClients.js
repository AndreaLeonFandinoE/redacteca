import {useEffect, useState} from "react";
import Forms from "../Forms/Forms.js";
import Client from "./Client";

const url = "https://62ccbd928042b16aa7d33ae3.mockapi.io/api/users"
const ListClients = ({children, name, lastname}) => {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        getClients()
    }, []);

    useEffect(() => {
        clients.length > 0 && console.log(clients);
    }, [clients]);

    const getClients = async () => {
        const clientList= await fetch(url)
        .then((res) => res.json())
        .then((newRes) => {
            return newRes.res
        }).catch((fall) => console.log(fall))

    clientList.then((list) => {
        Promise.all(list.map(async (client) => {
            return await fetch (client.url).then((res) => res.json())
            .then((detail => { setClients((detailClient) => {
                return [...detailClient, {name: detail.name, lastname: detail.lastname}]
            })}))
        }))
    })}

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
        {clients.map((client) => (
            <Client key={client.id}> title={client.name} lastname={lastname}
                <button onClick={() => deleteClient(client.id)}>Borrar</button>
            </Client>
        ))}
    </div>
)
}

export default ListClients
