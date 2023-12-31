import React, { useContext, useState } from 'react';
import { getDocs, collection, query, where, Timestamp, documentId, addDoc, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                console.log(objOrder)
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que están fuera de Stock')
            }

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se está generando su orden...</h1>
    }

    if(orderId) {
        return (
        <>
        <h1>Gracias por su compra!</h1>
        <h2>El id de su orden es: {orderId}</h2>
        <p>En unos minutos nos pondremos en contacto para coordinar la entrega de su pedido.</p>
        </>
        )
    }

    return (
        <>
            <CheckoutForm onConfirm={createOrder}/>
        </>
    )
}

export default Checkout;
        