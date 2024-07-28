import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
// import Projects from './components/Projects'; projects soon will be added
import Contact from './components/Contact';
import Skills from './components/Skills';
import With from './components/With'
import Footer from './components/Footer';

export default function Page() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      {/* <Projects/> */}
      <Contact/>
      <With/>
      <Footer/>
    </div>
  );
}
