import React, { useState } from 'react';
import { site } from '../../content/site';

const ContactLink = ({ href, label, icon }) => {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 0',
        borderTop: '1px solid var(--border)',
        fontFamily: "'Geist Mono', monospace",
        fontSize: 14,
        color: h ? 'var(--text)' : 'var(--muted)',
        textDecoration: 'none',
        transition: 'color .15s',
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {label}
      <span style={{ color: 'var(--muted)' }}>{icon}</span>
    </a>
  );
};

const ContactSection = () => {
  const { contact } = site;

  return (
    <section id="contact" className="section-border section-py">
      <div className="site-container">
        {/* Section label */}
        <div
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: 12,
            color: 'var(--muted)',
            marginBottom: 'clamp(16px, 2vw, 32px)',
          }}
        >
          {contact.sectionLabel}
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(36px, 6vw, 80px)',
            fontWeight: 600,
            letterSpacing: '-0.045em',
            maxWidth: '14ch',
            margin: '0 0 clamp(24px, 3vw, 48px)',
            lineHeight: 1.05,
            color: 'var(--text)',
          }}
        >
          {contact.headline}
        </h2>

        {/* Email */}
        <div style={{ marginBottom: 'clamp(32px, 4vw, 64px)' }}>
          <a
            href={`mailto:${contact.email}`}
            style={{
              fontSize: 'clamp(20px, 2.4vw, 30px)',
              fontWeight: 500,
              color: 'var(--text)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              borderBottom: '2px solid var(--accent)',
              paddingBottom: 2,
            }}
          >
            {contact.displayEmail}
            <span style={{ color: 'var(--accent)' }}>→</span>
          </a>
        </div>

        {/* Link grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          }}
        >
          {contact.links.map((link, i) => (
            <ContactLink key={i} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
