import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <label htmlFor="check">
                    <input type="checkbox" id="check" />
                    Only show products in stock
                </label>
            </div>
        );
    }
}

export default SearchBar;