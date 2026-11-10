import React, { useState } from 'react';
import '../css files/contact.css';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    contactPerson: '',
    businessEmail: '',
    companyName: '',
    serviceRequired: 'Sea freight',
    origin: '',
    destination: '',
    cargoDetails: '',
    additionalRequirements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Hero / Header Section */}
      <section className="contact-hero-header">
        <div className="container">
          <div className="contact-header-content">
            <span className="contact-badge-tag">REQUEST A QUOTE</span>
            <h1 className="contact-main-title">
              Request a <span className="contact-teal-accent">Logistics Quotation</span>
            </h1>
            <p className="contact-main-lead">
              Use this enquiry form to share your cargo details, preferred trade lanes, and timeline to receive a customized logistics plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Quote Form Section */}
      <section className="contact-section-body">
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success-state">
                <div className="contact-success-icon">📋</div>
                <h3 className="contact-success-title">Enquiry Draft Prepared!</h3>
                <p className="contact-success-text">
                  Thank you, <strong>{formData.contactPerson || 'valued client'}</strong>. Your shipment specifications for <strong>{formData.serviceRequired}</strong> from <strong>{formData.origin || 'Origin'}</strong> to <strong>{formData.destination || 'Destination'}</strong> have been recorded.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="contact-submit-btn"
                >
                  Prepare Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="contact-form-heading">Contact Lahar Logistics</h2>
                <p className="contact-form-subheading">
                  Use this enquiry form to share your cargo details and receive a customized logistics plan.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label>Contact person</label>
                      <input 
                        type="text" 
                        name="contactPerson" 
                        required 
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        className="contact-input"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label>Business email</label>
                      <input 
                        type="email" 
                        name="businessEmail" 
                        required 
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="name@company.com" 
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label>Company name</label>
                      <input 
                        type="text" 
                        name="companyName" 
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Organization / Company" 
                        className="contact-input"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label>Service required</label>
                      <select 
                        name="serviceRequired" 
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="contact-select"
                      >
                        <option value="Sea freight">Sea freight</option>
                        <option value="Air freight">Air freight</option>
                        <option value="Customs clearance">Customs clearance</option>
                        <option value="Freight forwarding">Freight forwarding</option>
                        <option value="Road transportation">Road transportation</option>
                        <option value="Warehousing">Warehousing</option>
                        <option value="Project cargo">Project cargo</option>
                        <option value="End-to-end logistics">End-to-end logistics</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label>Origin</label>
                      <input 
                        type="text" 
                        name="origin" 
                        required 
                        value={formData.origin}
                        onChange={handleChange}
                        placeholder="City, Port, or Country" 
                        className="contact-input"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label>Destination</label>
                      <input 
                        type="text" 
                        name="destination" 
                        required 
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="City, Port, or Country" 
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label>Cargo details</label>
                    <textarea 
                      name="cargoDetails" 
                      rows={3} 
                      value={formData.cargoDetails}
                      onChange={handleChange}
                      placeholder="Commodity type, weight, dimensions, container volume..." 
                      className="contact-textarea"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label>Additional requirements</label>
                    <textarea 
                      name="additionalRequirements" 
                      rows={2} 
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      placeholder="Target delivery dates, customs assistance, temperature control..." 
                      className="contact-textarea"
                    />
                  </div>

                  <button type="submit" className="contact-submit-btn">
                    Prepare Enquiry Draft
                  </button>
                </form>

                <p className="contact-prototype-notice">
                  The form above is a content prototype. The live website will connect this form to the company's designated email, CRM, or enquiry management system with an appropriate privacy notice.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;
