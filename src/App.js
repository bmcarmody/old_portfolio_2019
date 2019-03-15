import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './components/layout/Header';
import About from './components/sections/About';
import Footer from './components/layout/Footer';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    //This defines what 1rem is
    font-size: 62.5%;
  }

  body {
    @import url('https://use.typekit.net/sia8flr.css');

    font-family: montserrat, sans-serif;
    font-weight: 400;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
