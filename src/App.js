import React from 'react';
import HeroSection from './components/HeroSection';
import WhatWeOffer from './components/WhatWeOffer';
import Blogs from './components/Blogs';
import LetsConnect from './components/LetsConnect';
import Footer from './components/Footer';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="App">
      <HeroSection />
      <WhatWeOffer />
      <Blogs />
      <LetsConnect />
      <Footer />
    </div>
  );
}

export default App;
