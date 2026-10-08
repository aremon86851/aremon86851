import React from 'react';
import { site } from '../../content/site';

const Footer = () => {
  const { footer } = site;

  return (
    <footer style={{ borderTop: '1px solid var(--border)', paddingTop: 24, paddingBottom: 24 }}>
      <div
        className="site-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: 12,
            color: 'var(--footer)',
          }}
        >
          {footer.copy}
        </span>
        <span
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: 12,
            color: 'var(--footer)',
          }}
        >
          {footer.location}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
