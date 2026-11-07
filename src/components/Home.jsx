import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Sea Freight',
      description: 'Cost-conscious ocean shipping solutions for international cargo movements, subject to route and service availability.',
      image: '/images/sea-freight.jpg',
      tag: 'Global Maritime'
    },
    {
      title: 'Air Freight',
      description: 'Air cargo coordination for shipments where transit time and scheduling are important.',
      image: '/images/air-freight.jpg',
      tag: 'Express Air'
    },
    {
      title: 'Customs Clearance & Documentation',
      description: 'Support with shipment documentation and customs clearance coordination to help manage import and export formalities.',
      image: '/images/customer-clearance.jpg',
      tag: 'Compliance & Brokerage'
    },
    {
      title: 'Road Transportation',
      description: 'Cargo movement by road to support first-mile, last-mile, and domestic distribution requirements.',
      image: '/images/truck.jpg',
      tag: 'Land Transport'
    },
    {
      title: 'Warehousing & Project Cargo',
      description: 'Storage and cargo-handling coordination, including planning for specialised and oversized shipments according to project requirements.',
      extraPoints: [
        'One logistics partner. Multiple connected services.',
        'From individual freight requirements to coordinated, end-to-end logistics, Lahar aims to make your cargo movement simpler to plan and manage.'
      ],
      image: '/images/warehousing.jpg',
      tag: 'Storage & Projects'
    }
  ];

  return (
    <div id="home" className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="badge-tag">LAHAR INTEGRATED LOGISTICS PVT. LTD.</span>
          <h1 className="hero-title">
            Your Cargo. Our Commitment. <br />
            <span className="teal-text">A World of Possibilities.</span>
          </h1>
          <p className="hero-description">
            Reliable, cost-effective shipping and integrated logistics solutions that connect businesses to markets around the world.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">Request a Quote</Link>
            <Link to="/services" className="btn-secondary">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {/* Philosophy / Overview Section */}
      <section id="about" className="overview-section section-padding">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text">
              <span className="section-label">Integrated logistics. Simplified.</span>
              <h2 className="section-heading">Moving cargo with precision and care.</h2>
              <p className="about-lead-text">
                At Lahar Integrated Logistics, we understand that shipping is more than moving cargo from one place to another. It is about protecting business commitments, managing costs, coordinating multiple processes, and ensuring goods move through the supply chain as efficiently as possible.
              </p>
              <p className="about-lead-text">
                We offer integrated logistics services spanning sea freight, air freight, customs clearance, freight forwarding, transportation, warehousing, documentation, and project cargo coordination.
              </p>
              <p className="about-lead-text">
                Whether you are a growing business entering international markets or an established enterprise managing complex supply chains, our approach is built around your requirements.
              </p>

              <div className="promise-card">
                <div className="promise-title">Our Promise</div>
                <p className="promise-text">
                  Practical logistics solutions. Clear communication. A commitment to dependable service.
                </p>
              </div>
            </div>

            <div className="overview-visual">
              <div className="image-frame">
                <img 
                  src="/images/sea-freight.jpg" 
                  alt="Lahar International Cargo Vessel" 
                  className="rounded-image"
                />
                <div className="experience-badge">
                  <span className="badge-number">100%</span>
                  <span className="badge-text">Commitment to Reliability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section section-padding">
        <div className="container">
          <div className="section-header-center">
      
            <h2 className="section-heading">Our Services at a Glance</h2>
            <p className="section-description centered">
              End-to-end logistics solutions tailored to deliver efficiency across every link of your supply chain.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-img-wrapper">
                  <img src={service.image} alt={service.title} className="service-img" />
                  <span className="service-tag">{service.tag}</span>
                </div>
                <div className="service-body">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  {service.extraPoints && service.extraPoints.length > 0 && (
                    <div className="service-extra-points">
                      {service.extraPoints.map((point, pIndex) => (
                        <p key={pIndex} className="service-extra-point">
                          {point}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / CTA Section */}
      <section id="quote" className="cta-section">
        <div className="container cta-container">
          <div className="cta-content">
            <span className="section-label light">Get in Touch</span>
            <h2 className="cta-title">Ready to streamline your shipping and cargo operations?</h2>
            <p className="cta-subtitle">
              Contact our team today to discuss your route requirements, get quotes, or explore custom freight forwarding solutions.
            </p>
          </div>
          <div className="cta-action">
            <Link to="/contact" className="btn-primary large">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
