import React from 'react';
import HeroSection from './components/heroSection/HeroSection';
import WhatWeOffer from './components/whatWeOffer/WhatWeOffer';
import Blogs from './components/blogs/Blogs';
import LetsConnect from './components/letsConnect/LetsConnect';
import Footer from './components/footer/Footer';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />

      <WhatWeOffer />
      <h1 className='heading'>Explore and enjoy the blogs written by our passionate techies <i class="fa-brands fa-microblog"></i></h1>
      <Blogs />
      <h1 className='heading'> Let's Connect <i class="fa-regular fa-address-card"></i></h1>
      
      <LetsConnect />
      <Footer />
    </div>
  );
}

export default App;
