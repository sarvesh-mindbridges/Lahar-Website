import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  const faqs = [
    {
      q: 'What services does Lahar Integrated Logistics offer?',
      a: 'We provide integrated logistics solutions covering sea freight, air freight, road transportation, customs clearance & documentation, warehousing, freight forwarding, and project cargo coordination.'
    },
    {
      q: 'Can you handle both imports and exports?',
      a: 'Yes, we manage both inbound (import) and outbound (export) cargo movements, handling transportation, documentation, port operations, and regulatory compliance.'
    },
    {
      q: 'How can I request a freight quotation?',
      a: 'You can submit an inquiry through our Request a Quote form on the website or reach out directly to our operations team with your origin, destination, cargo volume, weight, and preferred timelines.'
    },
    {
      q: 'Do you provide customs clearance services?',
      a: 'Yes, we offer comprehensive customs clearance and documentation support to manage import and export formalities, classification, duty assessments, and port inspections efficiently.'
    },
    {
      q: 'Can you manage end-to-end shipments?',
      a: 'Yes, we coordinate complete end-to-end logistics from first-mile pickup to multimodal freight transport, warehousing, customs brokerage, and final last-mile delivery.'
    },
    {
      q: 'Do you handle oversized or project cargo?',
      a: 'Yes, our project cargo team specializes in planning and managing oversized, heavy-lift, and high-value cargo movements with tailored routing, specialized equipment, and direct site supervision.'
    },
    {
      q: 'How are freight charges calculated?',
      a: 'Freight charges depend on factors such as cargo weight, dimensions (chargeable/volumetric weight), mode of transport (sea, air, or road), route availability, fuel surcharges, customs duties, and any specialized handling requirements.'
    },
    {
      q: 'Which countries do you serve?',
      a: 'We connect businesses across major international maritime and air freight trade lanes covering Asia, the Middle East, Europe, North America, and other key global commercial hubs.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="page-section section-padding">
      <div className="container">
        <div className="section-header-center">
          <h1 className="section-heading">Frequently Asked Questions</h1>
          <p className="section-label">
            Find clear answers to common questions about our freight services, shipping processes, customs clearance, and global coverage.
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '45px auto 0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="service-card" 
                style={{ 
                  cursor: 'pointer', 
                  padding: '22px 28px',
                  borderColor: isOpen ? 'var(--color-sky)' : 'rgba(56, 189, 248, 0.2)',
                  transition: 'all 0.25s ease'
                }}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <h3 
                    className="service-title" 
                    style={{ 
                      fontSize: '17.5px', 
                      margin: 0, 
                      color: isOpen ? 'var(--color-sky)' : 'var(--color-white)',
                      transition: 'color 0.2s ease',
                      fontWeight: 600
                    }}
                  >
                    {item.q}
                  </h3>
                  <span 
                    style={{ 
                      color: 'var(--color-sky)', 
                      fontSize: '22px', 
                      fontWeight: 'bold',
                      lineHeight: 1,
                      minWidth: '24px',
                      textAlign: 'right'
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen && (
                  <p 
                    className="service-description" 
                    style={{ 
                      marginTop: '14px', 
                      borderTop: '1px solid rgba(56, 189, 248, 0.15)', 
                      paddingTop: '14px',
                      color: '#dceaf5',
                      fontSize: '15px',
                      lineHeight: '1.7'
                    }}
                  >
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div style={{ textAlign: 'center', marginTop: '55px' }}>
          <p style={{ color: 'var(--color-muted)', marginBottom: '16px', fontSize: '15px' }}>
            Have a specific shipping or cargo inquiry not answered here?
          </p>
          <Link to="/contact" className="btn-primary">
            Request a Quote / Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
