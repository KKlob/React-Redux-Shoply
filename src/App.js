import React from 'react';
import './App.css';
import Products from './Components/Products';
import Cart from './Components/Cart.js';
import { useSelector } from 'react-redux';


function App() {

  const { total, cart, products } = useSelector(state => ({ cart: state.cart, total: state.total, products: state.products }));

  return (
    <div className="App">
      <div id="header">
        <h3>S H O P L Y</h3>
        <p>Cart Total: ${total}</p>
        <Cart items={cart} />
      </div>
      <Products products={products} />
    </div>
  );
}

export default App;
