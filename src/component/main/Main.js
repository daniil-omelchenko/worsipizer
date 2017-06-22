import React, { Component } from 'react';
import './Main.css';
import FavoritePanel from './favorite-panel/FavoritePanel';
import SongPanel from './song-panel/SongPanel';


var Main = React.createClass({
    render: function() {
        return (
            <div className="main">
                <FavoritePanel/>
                <SongPanel/>
            </div>
        );
    }
});

export default Main;