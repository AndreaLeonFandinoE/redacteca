import { useContext, useState} from 'react';
import { addDoc, collection, getFirestore} from 'firebase/firestore'
import Swal from "sweetalert2"
import {cartContext}  from '../../context/cartContext';

import "./Forms.scss"

export const FormsItem = (forms) => {

    const { cart, totalPrice} = useContext(cartContext);

    const [form, setForm] = useState(forms);
    
    const modalMessage = (id) => {
        Swal.fire({
            title: "Gracias por registrate",
            text: `Su Orden: ${id} ha sido realizada con éxito!`,
            html: `<p>Creado el ${new Date().getDay}</p>`,
            icon: "success",
            confirmButtonText: "OK",
            // timer: 5000,
            footer: "Estas en RedacTeca",
            position: "center"
        })
    };

    const handleChange =(e) => {
        setForm({
            ...form,
        [e.target.name] : e.target.value
        })
    }

    const order = {
        buyer: {name: form.name, lastname: form.lastname, email: form.email, password: form.password},
        shops: cart.map((item) => ({name: item.name, price: item.price, quantity: item.quantity, id: item.id})),
        total: totalPrice(),
        
    }

    const updateOrder = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order)
        .then(({id}) => {
            modalMessage(id)
        })
    };


    return (
            {handleChange, form, updateOrder, modalMessage}
        
    );
};