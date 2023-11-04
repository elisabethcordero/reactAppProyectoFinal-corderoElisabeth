import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='scale-90'/>
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripcion: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0
                        ? (<Link to='/cart' className='bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600'>Terminar compra</Link>)
                        : (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>)
                }
            </footer>
        </article>
    )
}

export default ItemDetail;