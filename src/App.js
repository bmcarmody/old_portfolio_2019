import React, { Component } from 'react';

import './sass/App.scss';

import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Navbar />
        <div className="grid_body">
          <Content />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
