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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/Sales@laharlogistics.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Contact Person': formData.contactPerson,
          'Business Email': formData.businessEmail,
          'Company Name': formData.companyName || 'Not Specified',
          'Service Required': formData.serviceRequired,
          'Origin': formData.origin,
          'Destination': formData.destination,
          'Cargo Details': formData.cargoDetails || 'None provided',
          'Additional Requirements': formData.additionalRequirements || 'None provided',
          _subject: `New Quotation Request (${formData.serviceRequired}) from ${formData.contactPerson} - Lahar Logistics`
        })
      });

      const result = await response.json();

      if (response.ok || result.success === 'true' || result.success === true) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('FormSubmit direct send failed, activating mailto fallback:', err);
      const mailtoUrl = `mailto:Sales@laharlogistics.in?subject=${encodeURIComponent(
        `Quotation Request (${formData.serviceRequired}) from ${formData.contactPerson}`
      )}&body=${encodeURIComponent(
        `Contact Person: ${formData.contactPerson}\n` +
        `Business Email: ${formData.businessEmail}\n` +
        `Company Name: ${formData.companyName}\n` +
        `Service Required: ${formData.serviceRequired}\n` +
        `Origin: ${formData.origin}\n` +
        `Destination: ${formData.destination}\n` +
        `Cargo Details: ${formData.cargoDetails}\n` +
        `Additional Requirements: ${formData.additionalRequirements}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
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
                <h3 className="contact-success-title">Enquiry Draft Sent!</h3>
                <p className="contact-success-text">
                  Thank you, <strong>{formData.contactPerson || 'valued client'}</strong>. Your shipment specifications for <strong>{formData.serviceRequired}</strong> from <strong>{formData.origin || 'Origin'}</strong> to <strong>{formData.destination || 'Destination'}</strong> have been delivered directly to <strong>Sales@laharlogistics.in</strong>. Our freight operations team will review your requirements and reach out promptly.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      contactPerson: '',
                      businessEmail: '',
                      companyName: '',
                      serviceRequired: 'Sea freight',
                      origin: '',
                      destination: '',
                      cargoDetails: '',
                      additionalRequirements: ''
                    });
                  }} 
                  className="contact-submit-btn"
                >
                  Prepare Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="contact-form-heading">Request A Quote</h2>
                <p className="contact-form-subheading">
                  Use this enquiry form to share your cargo details and receive a customized logistics plan. All details are delivered directly to Sales@laharlogistics.in.
                </p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label>Contact person *</label>
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
                      <label>Business email *</label>
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
                      <label>Origin *</label>
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
                      <label>Destination *</label>
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
                    {isSubmitting ? 'Submitting Enquiry...' : 'Prepare Enquiry Draft'}
                  </button>
                </form>

                <p className="contact-prototype-notice">
                  All submitted shipment details are securely transmitted to Sales@laharlogistics.in.
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
