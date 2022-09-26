import React from 'react';
import './App.css';
import Products from './Components/Products';
import Cart from './Components/Cart.js';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';


function App() {

  const { total, cart, products } = useSelector(state => ({ cart: state.cart, total: state.total, products: state.products }));

  return (
    <div className="App">
      <div id="header">
        <h3>S H O P L Y</h3>
        <p>Cart Total: ${Object.keys(cart).length === 0 ? "0.00" : total}</p>
        {Object.keys(cart).length ? <Cart cart={cart} /> : null}
      </div>
      <Routes>
        <Route exact path="/" element={<Products products={products} />} />
        <Route exact path="/products/:key" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
