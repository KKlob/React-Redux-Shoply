import React from 'react';
import CartItem from './CartItem';
import './Cart.css';
import uuid from 'react-uuid';


function Cart({ cart }) {

    return (
        <div id="cart">
            {Object.keys(cart).map(itemName => <CartItem item={cart[itemName]} key={uuid()} />)}
        </div>
    )
}

export default Cart;