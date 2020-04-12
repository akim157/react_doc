import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    render() {
        return (
            <>
                <SearchBar />
                <ProductTable />
            </>
        );
    }
}

export default FilterableProductTable;