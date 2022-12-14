import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../app/actions';
import { Link } from 'react-router-dom';

function Product({ item }) {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => ({ cart: state.cart }));

    function handleAdd() {
        dispatch({ ...addItem(), payload: { item } });
    }

    function handleRemove() {
        let index = Object.keys(cart).findIndex(itemName => itemName === item.name);
        if (index >= 0) {
            dispatch({ ...removeItem(), payload: { item, index } });
        }
    }

    return (
        <div className="product">
            <img src={item.image_url} alt={item.name} />
            <p>{item.name.toUpperCase()}</p>
            <p>${item.price}</p>
            <p><Link to={`/products/${item.key}`}>Details</Link></p>
            <button className="AddToCartBtn" onClick={handleAdd}>Add To Cart</button><button className="RemoveFromCartBtn" onClick={handleRemove}>Remove From Cart</button>
        </div>
    )
}

export default Product;