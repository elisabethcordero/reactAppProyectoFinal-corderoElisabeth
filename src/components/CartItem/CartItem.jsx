import React from 'react'

const CartItem = ({item, removeItem}) => {
    const {id, name, quantity, price} = item
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-left text-gray-900">{name}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-right text-gray-900">{quantity}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-right text-gray-900">${price}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-right text-gray-900">${price * quantity}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-right text-gray-900"><button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600" onClick={() => removeItem(id)}>X</button></div>
            </td>
        </tr>
  )
       
}

export default CartItem