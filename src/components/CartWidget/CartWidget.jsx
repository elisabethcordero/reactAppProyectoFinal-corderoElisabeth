import './CartWidget.css'
import cart from './assets/cart.png';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {total, quantityCart} = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{display: total > 0 ? 'block' : 'none'}}>
            <img src={cart} alt="cart-widget" width={30} height={30}/>
            {quantityCart}
        </Link>
    )

}

export default CartWidget;