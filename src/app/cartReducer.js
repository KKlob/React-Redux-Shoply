import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';
import data from '../app/data.json';

const products = Object.keys(data.products).map(key => ({ ...data.products[key], key }));

const INI_STATE = { cart: [], total: +0, products }

function addToArrayPure(array, item) {
    return [...array, item];
}

function removeFromArrayPure(array, index) {
    const newArray = array.map(item => item);
    newArray.splice(index, 1);
    return newArray;
}

function cartReducer(state = INI_STATE, action) {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, cart: addToArrayPure(state.cart, action.payload.item), total: state.total + action.payload.item.price };
        case REMOVE_ITEM:
            return { ...state, cart: removeFromArrayPure(state.cart, action.payload.index), total: state.total - action.payload.item.price };
        default:
            return state;
    }
}

export default cartReducer;