import React, { Component } from 'react';
import db from './db/filterDB.json';

class ProductRow extends Component {
    render() {
        if (!db) return null;
        return (
            <div>
                <ul>
                    {
                        db.map((item, id) => (
                            <li key={id}>{item.name} {item.price}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default ProductRow;