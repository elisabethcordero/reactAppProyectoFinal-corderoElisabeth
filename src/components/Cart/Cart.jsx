import './Cart.css';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, clearCart, quantityCart, total, removeItem} = useContext(CartContext)

    if(quantityCart === 0) {
        return (
            <div>
                <h1 className="my-3">No hay items en el carrito</h1>
                <Link to='/' className='bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600'>Productos</Link>
            </div>
        )
    }

    const handleRemoveItem =(itemId) => {
        removeItem(itemId)
    }

    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Descripción
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Cantidad
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Precio Unitario
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Subtotal
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Eliminar
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {cart?.map(p => <CartItem key={p.id} item={p} removeItem={handleRemoveItem}/>)}
                    
                </tbody>
                <tfoot className="bg-gray-50">
                    <tr>
                        <td colSpan="3" className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-right text-gray-900">${total}</div>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div className="my-4">
                <button onClick={() => clearCart()} className='bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600'>Vaciar carrito</button>
                <Link to='/checkout' className='mx-4 bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600'>Finalizar compra</Link>
            </div>
        </div>
    )
}

export default Cart;