import './ItemCount.css'
import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd, handle}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity +1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity -1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="bg-blue-500 text-white py-1 m-1 px-2 rounded hover:bg-blue-600" onClick={decrement}>-</button>
                <input type="number" className="w-8 text-end" value={quantity} disabled/>
                <button className="bg-blue-500 text-white py-1 m-1 px-2 rounded hover:bg-blue-600" onClick={increment}>+</button>
            </div>
            <div>
                <button className="bg-indigo-500 text-white py-1 px-4 rounded hover:bg-indigo-600" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}


export default ItemCount;