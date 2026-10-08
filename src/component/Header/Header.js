import React, { useState } from 'react';
import { site } from '../../content/site';

const Header = () => {
  const { nav } = site;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg)' }}>
      <div
        className="site-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 22,
          paddingBottom: 22,
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--text)',
            textDecoration: 'none',
          }}
        >
          emon<span style={{ color: 'var(--accent)' }}>.</span>dev
        </a>

        {/* Desktop nav */}
        <nav
          style={{ display: 'flex', gap: 28 }}
          aria-label="Primary navigation"
        >
          {nav.links.map((link, i) => (
            <NavLink key={i} href={link.href} label={link.label} />
          ))}
        </nav>
      </div>

      {/* Mobile menu (visible when open) */}
      {menuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--border)',
            background: 'var(--bg)',
          }}
        >
          <div className="site-container" style={{ paddingTop: 16, paddingBottom: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {nav.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 14,
                  color: 'var(--muted)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, label }) => {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      style={{
        fontFamily: "'Geist Mono', monospace",
        fontSize: 13,
        color: h ? 'var(--accent)' : 'var(--muted)',
        textDecoration: 'none',
        transition: 'color .15s',
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {label}
    </a>
  );
};

export default Header;
