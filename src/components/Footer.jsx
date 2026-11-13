import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-main-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link to="/" onClick={scrollToTop} className="footer-brand" style={{ textDecoration: 'none' }}>
            <img 
              src="/images/logo-updated.png" 
              alt="Lahar Logistics Logo" 
              className="brand-logo-img" 
            />
            <div className="brand-text-wrapper">
              <span className="brand-highlight">LAHAR</span>
              <span className="brand-suffix">LOGISTICS</span>
            </div>
          </Link>
          <p className="footer-company-name">
            INTEGRATED LOGISTICS Solutions 
          </p>
          <p className="footer-tagline">
            Reliable logistics. Cost-conscious solutions. Connected possibilities.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-link-list">
            <li>
              <Link to="/" onClick={scrollToTop} className="footer-link">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop} className="footer-link">About Us</Link>
            </li>
            <li>
              <Link to="/services" onClick={scrollToTop} className="footer-link">Our Services</Link>
            </li>
            <li>
              <Link to="/services" onClick={scrollToTop} className="footer-link">Industries</Link>
            </li>
            <li>
              <Link to="/faq" onClick={scrollToTop} className="footer-link">Faq</Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Get in Touch</h4>
          <ul className="footer-link-list">
            <li>
              <Link to="/contact" onClick={scrollToTop} className="footer-link">Contact Us</Link>
            </li>
            <li>
              <Link to="/request-quote" onClick={scrollToTop} className="footer-link footer-cta-link">Request a Quote</Link>
            </li>
            <li className="footer-contact-item">
              <span className="footer-icon">✉</span>
              <a href="mailto:info@laharlogistics.com" className="footer-link">Sales@laharlogistics.in</a>
            </li>
            <li className="footer-contact-item">
              <span className="footer-icon">📞</span>
              <a href="tel:+910000000000" className="footer-link">8148824099</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="footer-copyright">
            © {currentYear} Lahar Integrated Logistics Pvt. Ltd. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link to="/contact" onClick={scrollToTop} className="footer-legal-link">Privacy Policy</Link>
            <span className="footer-divider">|</span>
            <Link to="/contact" onClick={scrollToTop} className="footer-legal-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
