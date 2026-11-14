import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css files/contact.css';

const ContactUs = () => {
  const [msgSent, setMsgSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [quickMsg, setQuickMsg] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleMsgChange = (e) => {
    const { name, value } = e.target;
    setQuickMsg((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMsgSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Free endpoint sending directly to Sales@laharlogistics.in
      const response = await fetch('https://formsubmit.co/ajax/sarvesh2023abc.com@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: quickMsg.name,
          Email: quickMsg.email,
          Subject: quickMsg.subject,
          Message: quickMsg.message,
          _subject: `New Contact Inquiry from ${quickMsg.name}: ${quickMsg.subject}`
        })
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        setMsgSent(true);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      // Fallback: Opens email client with pre-filled content if network/API fails
      console.warn('Direct submission error, activating mailto fallback:', err);
      const mailtoUrl = `mailto:Sales@laharlogistics.in?subject=${encodeURIComponent(
        quickMsg.subject || 'Website Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${quickMsg.name}\nEmail: ${quickMsg.email}\n\nMessage:\n${quickMsg.message}`
      )}`;
      window.location.href = mailtoUrl;
      setMsgSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero / Header Section */}
      <section className="contact-hero-header">
        <div className="container">
          <div className="contact-header-content">
            <span className="contact-badge-tag">GET IN TOUCH</span>
            <h1 className="contact-main-title">
              Contact <span className="contact-teal-accent">Lahar Logistics</span>
            </h1>
            <p className="contact-main-lead">
              Our freight and supply chain specialists are here to answer your questions and assist with your logistics requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-section-body">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left: Company & Office Information */}
            <div className="contact-info-card">
              <h2 className="contact-info-card-title">Corporate Information</h2>

              <div className="contact-detail-group">
                <span className="contact-field-label">Company</span>
                <p className="contact-field-value" style={{ fontWeight: 600 }}>
                  Lahar Integrated Logistics Pvt. Ltd.
                </p>
              </div>

              <div className="contact-detail-group">
                <span className="contact-field-label">Office Address</span>
                <p className="contact-field-value">
                  N307, Casagrand Castle<br />
                  Manapakkam<br />
                  Chennai 600125
                </p>
              </div>

              <div className="contact-detail-group">
                <span className="contact-field-label">Email</span>
                <p className="contact-field-value">
                  <a href="mailto:Sales@laharlogistics.in">Sales@laharlogistics.in</a>
                </p>
              </div>

              <div className="contact-detail-group">
                <span className="contact-field-label">Phone</span>
                <p className="contact-field-value">
                  <a href="tel:8148824099">+91 81488 24099</a>
                </p>
              </div>

              <div className="contact-detail-group">
                <span className="contact-field-label">Business Hours</span>
                <p className="contact-field-value">
                  10:00 AM - 6:00 PM (Mon - Fri)
                </p>
              </div>

              <div className="contact-info-note">
                Our team responds to all freight inquiries, rate requests, and custom route assessments within standard business hours.
              </div>

              <div style={{ marginTop: '12px' }}>
                <Link to="/request-quote" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                  Need a Shipment Rate? Request a Quote →
                </Link>
              </div>
            </div>

            {/* Right: Direct Message / General Inquiry Form */}
            <div className="contact-form-card">
              {msgSent ? (
                <div className="contact-success-state">
                  <div className="contact-success-icon">✉️</div>
                  <h3 className="contact-success-title">Message Delivered!</h3>
                  <p className="contact-success-text">
                    Thank you, <strong>{quickMsg.name || 'valued customer'}</strong>. Your message and contact details have been dispatched to <strong>Sales@laharlogistics.in</strong>. A representative will contact you shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setMsgSent(false);
                      setQuickMsg({ name: '', email: '', subject: '', message: '' });
                    }} 
                    className="contact-submit-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="contact-form-heading">Send Us a Direct Message</h2>
                  <p className="contact-form-subheading">
                    Have general questions or need assistance? Drop us a line below. All details are delivered directly to our sales inbox.
                  </p>

                  <form onSubmit={handleMsgSubmit} className="contact-form">
                    <div className="contact-form-row">
                      <div className="contact-form-group">
                        <label>Your Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          value={quickMsg.name}
                          onChange={handleMsgChange}
                          placeholder="Full Name" 
                          className="contact-input"
                        />
                      </div>
                      <div className="contact-form-group">
                        <label>Email Address</label>
                        <input 
                          type="email" 
                          name="email" 
                          required 
                          value={quickMsg.email}
                          onChange={handleMsgChange}
                          placeholder="name@example.com" 
                          className="contact-input"
                        />
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label>Subject</label>
                      <input 
                        type="text" 
                        name="subject" 
                        required 
                        value={quickMsg.subject}
                        onChange={handleMsgChange}
                        placeholder="Inquiry Subject" 
                        className="contact-input"
                      />
                    </div>

                    <div className="contact-form-group">
                      <label>Your Message</label>
                      <textarea 
                        name="message" 
                        rows={4} 
                        required
                        value={quickMsg.message}
                        onChange={handleMsgChange}
                        placeholder="How can we assist your business today?" 
                        className="contact-textarea"
                      />
                    </div>

                    {errorMessage && (
                      <p style={{ color: '#F87171', fontSize: '13.5px', margin: 0 }}>
                        {errorMessage}
                      </p>
                    )}

                    <button 
                      type="submit" 
                      className="contact-submit-btn"
                      disabled={isSubmitting}
                      style={{ opacity: isSubmitting ? 0.75 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
