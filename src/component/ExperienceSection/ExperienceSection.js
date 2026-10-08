import React from 'react';
import { site } from '../../content/site';

const ExperienceSection = () => {
  const { experience } = site;

  return (
    <section id="experience" className="section-border section-py">
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
            Experience
          </h2>
          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 12,
              color: 'var(--muted)',
            }}
          >
            {experience.sectionLabel}
          </span>
        </div>

        {/* Rows */}
        <div>
          {experience.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 20,
                borderTop: '1px solid var(--border)',
                paddingTop: 28,
                paddingBottom: 28,
              }}
            >
              {/* Date */}
              <div
                style={{
                  width: 200,
                  flexShrink: 0,
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 13,
                  color: 'var(--muted)',
                  paddingTop: 3,
                }}
              >
                {item.dates}
              </div>

              {/* Content */}
              <div
                style={{
                  flex: '1 1 380px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 21,
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: 4,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.role}
                  </div>
                  {item.meta && (
                    <div
                      style={{
                        fontFamily: "'Geist Mono', monospace",
                        fontSize: 12,
                        color: 'var(--muted)',
                      }}
                    >
                      {item.meta}
                    </div>
                  )}
                </div>

                {/* Bullets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {item.bullets.map((bullet, bi) => (
                    <div
                      key={bi}
                      style={{
                        fontSize: 16,
                        color: bullet.placeholder ? '#8A8A8A' : 'var(--text-3)',
                        display: 'flex',
                        gap: 10,
                        alignItems: 'flex-start',
                        textDecoration: bullet.placeholder ? 'underline' : 'none',
                        textDecorationStyle: bullet.placeholder ? 'dashed' : undefined,
                        textDecorationColor: bullet.placeholder ? '#555' : undefined,
                        textUnderlineOffset: bullet.placeholder ? '3px' : undefined,
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--accent)',
                          flexShrink: 0,
                          lineHeight: 1.55,
                        }}
                      >
                        -
                      </span>
                      {bullet.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
