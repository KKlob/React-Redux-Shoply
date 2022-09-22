import React from 'react';
import Product from './Product';
import './Products.css';

function Products({ products }) {

    return (
        <div id="products_container">
            {products.map(item => <Product item={item} key={item.key} />)}
        </div>
    )
}

export default Products;