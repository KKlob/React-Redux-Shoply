import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../app/actions';

function Product({ item }) {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => ({ cart: state.cart }));

    function handleAdd() {
        dispatch({ ...addItem(), payload: { item } });
    }

    function handleRemove() {
        const index = cart.findIndex(prod => prod.key === item.key);
        if (index >= 0) {
            dispatch({ ...removeItem(), payload: { item, index } });
        }
    }

    return (
        <div className="product">
            <img src={item.image_url} alt={item.name} />
            <p>{item.name.toUpperCase()}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button className="AddToCartBtn" onClick={handleAdd}>Add To Cart</button><button className="RemoveFromCartBtn" onClick={handleRemove}>Remove From Cart</button>
        </div>
    )
}

export default Product;