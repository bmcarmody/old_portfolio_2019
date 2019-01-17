import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './sass/App.scss';

import Avatar from './components/layout/Avatar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <aside>
            <Avatar />
            <Navbar />
          </aside>

          <main>
            <Route exact path="/" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
