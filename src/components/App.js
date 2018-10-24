import React, { Component } from 'react';
// import logo from './Global/images/logo.svg';
import $ from 'jquery';
import Popper from 'popper.js';

import '../styles/App.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import players from '../data/players';
import { ListaConvocados } from './ListaConvocados';

import banner from '../images/banner.png'



class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container">
          <img className="img-fluid" src={banner} alt=""/>
          <h1>LISTA DE CONVOCADOS LIGA DE CLANES 24.10.18</h1>
          <ListaConvocados convocados={players}/>
        </div>
      </div>
    );
  }
}

export default App;
