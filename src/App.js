import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import NavBar from './Components/NavBar';
import Services from "./Components/Services"
import About from "./Components/About"
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Project from './Components/Project'
import Skills from './Components/Skills'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Services />
      <Skills />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
