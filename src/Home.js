import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import Header from './composants/Header/Header.js';
import Bandeau from './composants/Bandeau/Bandeau.js';
import Projetsaleatoires from './composants/Projetsaleatoires/Projetsaleatoires.js';
import Partenaires from './composants/Partenaires/Partenaires.js';
import Footer from './composants/Footer/Footer.js';
import './Data.js';

class Home extends Component {
  render() {
    return (
      <div className="App">


      <div className="container-principal">
        <Header />
        <Bandeau />
        <div className="container">
          <Projetsaleatoires />
          <Partenaires />
        </div>

        <Footer />
      </div>



      </div>
    );
  }
}

export default Home;
