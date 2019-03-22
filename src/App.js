import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Particles from 'react-particles-js';

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

  .particles {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -10;
    top: 0;
    left: 0;
  }

  .particles__canvas {
    display: block;
    vertical-align: bottom;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Particles
          params={{
            particles: {
              number: {
                value: 50
              },
              size: {
                value: 4
              },
              color: {
                value: '#F00'
              },
              line_linked: {
                color: '#000'
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                }
              }
            }
          }}
          className="particles"
          canvasClassName="particles__canvas"
        />
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
