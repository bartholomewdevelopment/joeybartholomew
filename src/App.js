import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe'; 
//import Contact from 'components/Contact';//
import Contact from '../src/components/Contact';
import '../src/styles.css'

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
