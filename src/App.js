import React, { Component } from 'react';
import './App.css';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Footer from './component/footer/Footer';


class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
  }
}

export default App;
