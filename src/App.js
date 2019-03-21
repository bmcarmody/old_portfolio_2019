import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './components/layout/Header';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
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
    padding-bottom: 17rem;
    position: relative;
  }

  h1 {
    font-size: 2.5rem;
    width: fit-content;
    margin-bottom: 2rem;
    border-bottom: 3px solid #F15C5C;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
