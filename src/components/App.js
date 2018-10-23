import React, { Component } from 'react';
// import logo from './Global/images/logo.svg';
import './Global/css/App.css';

import items from '../data/players';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>LISTA DE CONVOCADOS LIGA DE CLANES 24.10.18</h1>
          <ul className="List-items">
            {items && items.map((item,key) => <li className="Cited" key={key}>{item.name}</li>)}
          </ul>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
