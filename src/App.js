import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Tic-tac-toe </h1>
          <Game/>
      </div>
    );
  }
}

export default App;
