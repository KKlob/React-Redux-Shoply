import React from 'react';

function CartItem({ item }) {

    return (
        <div className="cart_item">
            <img src={item.image_url} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.qty} x ${item.price}</p>
        </div>
    )
}

export default CartItem;