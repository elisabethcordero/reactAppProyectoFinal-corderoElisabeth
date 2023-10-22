import React from 'react'

const CartItem = ({item, removeItem}) => {
    const {id, name, quantity, price} = item
    return (
        <div>
            {name}
            Cantidad: {quantity}
            Precio por Unidad: ${price}
            Subtotal: ${price * quantity}
            <button onClick={() => removeItem(id)}>X</button>
        </div>
  )
}

export default CartItem