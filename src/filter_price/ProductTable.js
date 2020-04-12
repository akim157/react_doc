import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {
        return (
            <div>
                <span>Name</span>
                <span>Price</span>
                <ProductRow />
            </div>
        );
    }
}

export default ProductTable;