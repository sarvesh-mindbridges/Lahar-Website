import React from 'react';
import { Link } from 'react-router-dom';
import '../css files/services.css';

const Services = () => {
  const servicesList = [
    {
      id: 'sea-freight',
      title: 'Sea Freight',
      lead: 'A practical option for international cargo where shipment volume, freight economics, and delivery schedules must be considered together.',
      image: '/images/sea-freight.jpg',
      tag: 'Ocean Cargo',
      points: [
        'Full Container Load (FCL) coordination',
        'Less than Container Load (LCL) coordination',
        'Import and export ocean freight',
        'Port-to-port or wider shipment coordination, subject to service availability'
      ]
    },
    {
      id: 'air-freight',
      title: 'Air Freight',
      lead: 'Air cargo solutions for time-sensitive or high-priority shipments, with options selected according to route, cargo specifications, and budget.',
      image: '/images/air-freight-2.jpg',
      tag: 'Express Air',
      points: [
        'Import and export air cargo coordination',
        'Shipment planning and routing',
        'Cargo documentation support',
        'Coordination with relevant handling and delivery partners'
      ]
    },
    {
      id: 'customs-clearance',
      title: 'Customs Clearance',
      lead: 'Support to help customers navigate customs procedures and organise the information needed for import and export formalities.',
      image: '/images/customer-clearance.jpg',
      tag: 'Brokerage & Compliance',
      points: [
        'Customs documentation coordination',
        'Import and export clearance support',
        'Coordination with customs brokers and relevant authorities, as applicable',
        'Shipment status and clearance follow-up'
      ],
      note: 'Regulated clearance activities will be undertaken by appropriately authorised parties, as required.'
    },
    {
      id: 'freight-forwarding',
      title: 'Freight Forwarding',
      lead: 'Coordinated cargo arrangements that bring together transport options, shipment documentation, handling, and destination requirements.',
      image: '/images/ship.jpg',
      tag: 'Multimodal Chain',
      points: [
        'International freight coordination',
        'Carrier and routing options, subject to availability',
        'Import and export shipment planning',
        'Coordination across the logistics chain'
      ]
    },
    {
      id: 'road-transportation',
      title: 'Road Transportation',
      lead: 'Domestic cargo movement connecting factories, warehouses, ports, distribution centres, and customer destinations.',
      image: '/images/truck.jpg',
      tag: 'Domestic & Land',
      points: [
        'Container transportation coordination',
        'Full-load and part-load options, where available',
        'First-mile and last-mile movement',
        'Pickup and delivery scheduling'
      ]
    },
    {
      id: 'warehousing',
      title: 'Warehousing',
      lead: 'Storage and cargo-handling solutions to support inventory movement and distribution planning.',
      image: '/images/warehousing.jpg',
      tag: 'Storage & Hub',
      points: [
        'Storage coordination',
        'Inbound and outbound cargo handling',
        'Inventory movement support',
        'Warehousing linked to transport and distribution requirements'
      ]
    },
    {
      id: 'project-cargo',
      title: 'Project Cargo',
      lead: 'Logistics planning for heavy, oversized, specialised, or non-standard cargo requiring additional coordination.',
      image: '/images/project-cargo.png',
      tag: 'Specialised Cargo',
      points: [
        'Cargo requirement assessment',
        'Transport and handling coordination',
        'Route and equipment planning',
        'Coordination of project-specific logistics requirements'
      ]
    },
    {
      id: 'end-to-end',
      title: 'End-to-End Logistics',
      lead: 'An integrated approach that coordinates multiple logistics activities under one shipment plan, reducing the burden of managing disconnected service providers.',
      image: '/images/endtoend.jpeg',
      tag: 'Integrated Turnkey',
      points: [
        'Freight and transportation coordination',
        'Documentation and clearance coordination',
        'Storage and cargo-handling arrangements',
        'Shipment planning from origin to destination, according to agreed scope'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Compact & Clean Hero Header */}
      <section className="services-hero-header">
        <div className="container">
          <div className="services-header-content">
            <span className="services-badge-tag">OUR SERVICES</span>
            <h1 className="services-main-title">
              Logistics Solutions Designed Around <span className="services-teal-accent">Your Cargo</span>
            </h1>
            <p className="services-main-lead">
              Every shipment has its own priorities—cost, transit time, handling requirements, documentation, and destination. Lahar Integrated Logistics offers a range of services designed to support these requirements through coordinated logistics planning.
            </p>

            {/* Quick Filter / Jump Chips */}
            <div className="services-quick-nav">
              {servicesList.map((svc) => (
                <a key={svc.id} href={`#${svc.id}`} className="service-nav-chip">
                  {svc.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section (Immediately Visible Above the Fold) */}
      <section className="services-detail-section">
        <div className="container">
          <div className="services-full-grid">
            {servicesList.map((service, index) => (
              <div key={index} id={service.id} className="service-detail-card">
                <div className="service-detail-img-wrap">
                  <img src={service.image} alt={service.title} className="service-detail-img" />
                  <span className="service-badge-pill">{service.tag}</span>
                </div>
                <div className="service-detail-body">
                  <h2 className="service-card-title">
                    {service.title}
                  </h2>
                  <p className="service-lead-desc">
                    {service.lead}
                  </p>

                  <div className="service-bullet-list">
                    {service.points.map((pt, pIdx) => (
                      <div key={pIdx} className="service-bullet-item">
                        <span className="bullet-icon">✓</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {service.note && (
                    <div className="service-regulatory-note">
                      ℹ️ {service.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prominent CTA Banner */}
      <section className="services-cta-banner">
        <div className="container services-cta-inner">
          <div className="services-cta-text">
            <span className="services-cta-label">Ready to Plan?</span>
            <h2 className="services-cta-title">Have a shipment to plan?</h2>
            <p className="services-cta-subtitle">
              Contact our team to discuss your cargo, route, timeline, and budget.
            </p>
          </div>
          <div className="services-cta-action">
            <Link to="/contact" className="services-cta-btn">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
