import React from 'react';
import { site } from '../../content/site';

const StackSection = () => {
  const { stack } = site;

  return (
    <section id="stack" className="section-border section-py">
      <div className="site-container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 'clamp(24px, 3vw, 48px)',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              margin: 0,
              color: 'var(--text)',
            }}
          >
            Stack
          </h2>
          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 12,
              color: 'var(--muted)',
            }}
          >
            {stack.sectionLabel}
          </span>
        </div>

        {/* Hairline grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
            gap: '1px',
            background: 'var(--border)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            overflow: 'hidden',
          }}
        >
          {stack.categories.map((cat, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg)',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 11,
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {cat.label}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {cat.items.map((item, j) => (
                  <span
                    key={j}
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: 13,
                      color: 'var(--text-2)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
