import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../app/actions';
import './ProductDetail.css';

function ProductDetail() {

    const { key } = useParams();

    const dispatch = useDispatch();

    const { products, cart } = { products: useSelector(store => store.products), cart: useSelector(store => store.cart) }

    let item = products.find(item => item.key === key);

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
        <div id="product-detail">
            <img src={item.image_url} alt={item.name} />
            <p>{item.name.toUpperCase()}</p>
            <p>${item.price}</p>
            <p>{item.description}</p>
            <button className="AddToCartBtn" onClick={handleAdd}>Add To Cart</button><button className="RemoveFromCartBtn" onClick={handleRemove}>Remove From Cart</button>
            <p><Link to="/">Back to Products</Link></p>
        </div>
    )
}

export default ProductDetail;