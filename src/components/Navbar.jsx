import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile drawer whenever user navigates to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`navbar-header ${isScrolled || isMenuOpen ? 'scrolled' : 'transparent'}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <img 
            src="/images/lahar-logo.png" 
            alt="Lahar Logistics Logo" 
            className="brand-logo-img" 
          />
          <div className="brand-text-wrapper">
            <span className="brand-highlight">LAHAR</span>
            <span className="brand-suffix">LOGISTICS</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="navbar-links desktop-only">
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
          <Link to="/request-quote" className="btn-nav">
            Request a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-inner">
          <NavLink 
            to="/" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            Services
          </NavLink>
          <NavLink 
            to="/faq" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            Faq
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            Contact Us
          </NavLink>
          <Link to="/request-quote" className="mobile-nav-btn">
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
