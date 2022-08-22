import { useContext, useState} from 'react';
import { addDoc, collection, getFirestore} from 'firebase/firestore'
import Swal from "sweetalert2"
import {cartContext}  from '../../context/cartContext';

import "./Forms.scss"

export const FormsItem = (forms) => {

    const { cart, totalPrice} = useContext(cartContext);

    const [form, setForm] = useState(forms);
    
    const modalMessage = () => {
        Swal.fire({
            title: `¡Hola ${form.name}!`,
            text: "Gracias por registrate, te estaremos contactando al correo que ingresaste.",
            icon: "success",
            confirmButtonText: "OK",
            footer: `RedacTeca - ${new Date().getHours()}:${new Date().getMinutes()} - ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
            position: "center",
            confirmButtonColor: "rgba(153, 205, 50, 0.589)",
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