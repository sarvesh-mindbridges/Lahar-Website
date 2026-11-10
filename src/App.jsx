import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Faq from './components/Faq';
import ContactUs from './components/ContactUs';
import RequestQuote from './components/RequestQuote';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/request-quote" element={<RequestQuote />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
