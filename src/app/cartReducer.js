import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';
import data from '../app/data.json';

const products = Object.keys(data.products).map(key => ({ ...data.products[key], key }));

const INI_STATE = { cart: {}, total: +0, products }

function removeItemFromCart(cart, item) {
    if (Object.keys(cart).includes(item.name)) {
        if (cart[item.name].qty === 1) {
            let newCart = { ...cart };
            delete newCart[item.name];
            return newCart;
        }
        let qty = cart[item.name].qty - 1;
        return { ...cart, [item.name]: { ...item, qty: qty } }
    }
}

function addItemToCart(cart, item) {
    if (Object.keys(cart).includes(item.name)) {
        let qty = cart[item.name].qty + 1;
        return { ...cart, [item.name]: { ...item, qty: qty } };
    }
    return { ...cart, [item.name]: { ...item, qty: 1 } };
}

function updateTotal(cart) {
    let total = 0;
    Object.keys(cart).map(itemName => total = Math.round((total + (cart[itemName].price * cart[itemName].qty)) * 100) / 100);
    return total;
}

function cartReducer(state = INI_STATE, action) {
    let newTotal;
    switch (action.type) {
        case ADD_ITEM:
            let addCart = addItemToCart(state.cart, action.payload.item);
            newTotal = updateTotal(addCart);
            return { ...state, cart: { ...addCart }, total: newTotal };
        case REMOVE_ITEM:
            let remCart = removeItemFromCart(state.cart, action.payload.item);
            newTotal = updateTotal(remCart);
            return { ...state, cart: { ...remCart }, total: newTotal };
        default:
            return state;
    }
}

export default cartReducer;