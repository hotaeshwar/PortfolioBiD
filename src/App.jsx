import React from 'react';
import Navbar from './components/Navbar';
import HeroPage from './components/Hero';
import Clientscarousel from './components/Clientscarousel';
import OurWork from './components/OurWork';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <section id="hero" className="w-full">
        <HeroPage />
      </section>
      
      <section id="our-work" className="w-full">
        <OurWork />
      </section>
      
      <section id="clients" className="w-full">
        <Clientscarousel />
      </section>
    </div>
  );
}

export default App;