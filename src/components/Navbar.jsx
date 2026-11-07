import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-highlight">LAHAR</span>
          <span className="brand-suffix">LOGISTICS</span>
        </Link>
        <nav className="navbar-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Services
          </NavLink>
          <NavLink 
            to="/faq" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Faq
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact Us
          </NavLink>
          <Link to="/contact" className="btn-nav">
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
