import React from 'react';
import CartItem from './CartItem';
import './Cart.css';
import uuid from 'react-uuid';


function Cart({ items }) {

    return (
        <div id="cart">
            {items.map(item => <CartItem item={item} key={uuid()} />)}
        </div>
    )
}

export default Cart;