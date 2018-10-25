import React, { Component } from 'react';
// import logo from './Global/images/logo.svg';
// import $ from 'jquery';
// import Popper from 'popper.js';

import '../styles/App.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import players from '../data/players';
import { ListaConvocados } from './ListaConvocados';
import { Carousel1 } from './Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Carousel1 />
          <h1 className="center">SUPER LIGA DE CLANES</h1>
          <ListaConvocados convocados={players} />
        </div>
      </div>
    );
  }
}

export default App;
