import './CheckoutForm.css';
import React, { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="max-w-sm mx-auto">
            <form onSubmit={handleConfirm}>
                <h2 className="text-2xl mb-4">Formulario de contacto</h2>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-left text-base font-medium text-gray-700">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Ingresa un Nombre"
                        className="mt-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="telefono" className="block text-left text-base font-medium text-gray-700">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        id="telefono"
                        className="mt-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300"
                        placeholder="Ingresa un Telefono"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-left text-base font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingresa un Email"
                        className="mt-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
                    >
                    Enviar
                    </button>
            
            </form>
        </div>
    )

}

export default CheckoutForm;

