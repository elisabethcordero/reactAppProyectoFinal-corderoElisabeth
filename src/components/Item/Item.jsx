import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
  return (
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg" />
        </picture>
        <section>
            <p className="Info">
                Precio: ${price}
            </p>
            <p className="Info">
                Stock disponible: {stock}
            </p>
        </section>
        <footer className="ItemFooter my-1">
            <Link to={`/item/${id}`} className="bg-indigo-500 text-white py-1 px-4 rounded hover:bg-indigo-600">Ver detalle</Link>
        </footer>
    </article>
  )
}

export default Item;