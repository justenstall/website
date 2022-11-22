import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Front } from './pages/Front';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Fun } from './pages/Fun';
import { Footer } from './pages/Footer';
import { FluidContainer } from './components/FluidContainer';
import NavbarMobile from './components/NavbarMobile';

class App extends Component {
  render() {
    return (
      <FluidContainer className="App">
        {window.outerWidth > 500 ? <Navbar /> : <NavbarMobile /> }
        <Front />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Fun />
        <Footer />
      </FluidContainer>
    );
  }
}

export default App;
