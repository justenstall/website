import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Squares } from './components/squares';

class App extends Component {
    gameReset() {

    }

    render() {
        return (
        <div>
            <Header />
            <div >
            <Squares />
            </div>
        </div>
        );
    }
}

export default App;
