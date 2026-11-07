import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Faq from './components/Faq';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <footer className="footer-section">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Lahar Integrated Logistics Pvt. Ltd. All rights reserved.</p>
          <p className="footer-subtext">Practical logistics solutions. Clear communication. A commitment to dependable service.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
