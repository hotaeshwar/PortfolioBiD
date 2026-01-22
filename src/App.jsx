import React from 'react';
import Navbar from './components/Navbar';
import HeroPage from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import WhyChooseUs from './components/Whychooseus';
import ContactUs from './components/Contactus';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home">
        <HeroPage />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
}

export default App;