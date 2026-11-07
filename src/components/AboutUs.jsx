import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const coreValues = [
    {
      title: 'Reliability',
      desc: 'We believe in clear commitments, careful coordination, and responsible service delivery.'
    },
    {
      title: 'Cost-conscious thinking',
      desc: 'We focus on practical routing and logistics options that balance cost, transit time, and cargo requirements.'
    },
    {
      title: 'Transparent communication',
      desc: 'We value timely updates, clear expectations, and open communication throughout the shipment process.'
    },
    {
      title: 'Customer-focused solutions',
      desc: 'We recognise that different businesses have different logistics needs and work to identify suitable solutions.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero & Intro Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            {/* Left Content */}
            <div className="about-hero-content">

              <h1 className="about-hero-title">
                Connecting Businesses. <br />
                <span className="teal-text">Simplifying Logistics.</span>
              </h1>
              
              <p className="about-lead-text">
                Lahar Integrated Logistics Pvt. Ltd. is positioned to serve businesses seeking dependable, cost-effective, and coordinated logistics solutions for domestic and international cargo movements.
              </p>

              <div className="about-text-blocks">
                <p>
                  We recognise that every shipment carries a business commitment. Delays, documentation issues, fragmented coordination, and unpredictable costs can affect an entire supply chain. Our approach is to bring greater clarity and coordination to the logistics process, helping customers plan their cargo movements with confidence.
                </p>
                <p>
                  Through our range of freight and logistics services, we aim to provide a practical, customer-focused approach that supports businesses across industries and stages of growth.
                </p>
              </div>

              <div className="hero-actions" style={{ marginTop: '30px' }}>
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="about-hero-visual">
              <div className="image-frame">
                <img 
                  src="/images/about-us.jpg" 
                  alt="Customs Logistics Coordination" 
                  className="rounded-image"
                />
                <div className="experience-badge">
                  <span className="badge-number">100%</span>
                  <span className="badge-text">Dependable Cargo Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section section-padding">
        <div className="container">
          <div className="vision-mission-grid">
            {/* Vision */}
            <div className="service-card vision-card">
              <span className="section-label">Strategic Direction</span>
              <h2 className="service-title" style={{ fontSize: '26px', color: 'var(--color-sky)', marginBottom: '14px' }}>
                Our Vision
              </h2>
              <p className="service-description" style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-text)' }}>
                To be a trusted logistics partner recognised for reliability, customer focus, operational efficiency, and value-driven supply chain solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="service-card vision-card">
              <span className="section-label">Core Purpose</span>
              <h2 className="service-title" style={{ fontSize: '26px', color: 'var(--color-sky)', marginBottom: '14px' }}>
                Our Mission
              </h2>
              <p className="service-description" style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--color-text)' }}>
                To simplify cargo movement by providing coordinated logistics services, responsive communication, and cost-conscious solutions aligned with our customers' business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="section-header-center">
           
            <h2 className="section-heading">Our Core Values</h2>
            <p className="section-description centered">
              The foundational standards that shape how we manage operations and deliver value to our clients every day.
            </p>
          </div>

          <div className="values-grid">
            {coreValues.map((val, idx) => (
              <div key={idx} className="service-card value-card">
                <h3 className="service-title" style={{ fontSize: '19px', color: 'var(--color-white)', marginBottom: '12px' }}>
                  {val.title}
                </h3>
                <p className="service-description" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Placeholder Banner */}
          <div className="about-placeholder-banner">
            <p>
              Company background, founding year, management credentials, operational footprint, and achievements can be added here once confirmed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
