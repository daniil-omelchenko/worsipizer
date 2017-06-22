import React, { Component } from 'react';
import './SearchBar.css'

var SearchBar = React.createClass({
    render: function() {
        return (
            <div className="search-bar">
                <input type="text" placeholder="Search song..." className="search-field" onChange={this.handleSearch} />
            </div>
        );
    },

    handleSearch: function(event) {
        console.log(event);
    }
});

export default SearchBar;