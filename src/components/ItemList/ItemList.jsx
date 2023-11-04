import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className="ListGroup flex flex-wrap justify-center">
        { products?.map(product => <Item key={product.id} {...product} />) }
    </div>
  )
}

export default ItemList