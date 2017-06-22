import React, { Component } from 'react';
import './Header.css';
import Logo from './logo/Logo';
import SearchBar from './search-bar/SearchBar';


var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <Logo/>
                <SearchBar/>
            </div>
        );
    }
});

export default Header;