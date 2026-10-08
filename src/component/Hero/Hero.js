import React, { useState } from 'react';
import { site } from '../../content/site';

const Hero = () => {
  const { hero } = site;
  const [photoError, setPhotoError] = useState(false);
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  return (
    <section
      style={{
        paddingTop: 'clamp(48px, 6vw, 80px)',
        paddingBottom: 'clamp(48px, 6vw, 80px)',
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(36px, 5vw, 72px)',
            alignItems: 'flex-end',
          }}
        >
          {/* ── Text column ── */}
          <div
            style={{
              flex: '1 1 560px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            {/* Status pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                border: '1px solid var(--border-chip)',
                borderRadius: 999,
                padding: '5px 14px',
                fontFamily: "'Geist Mono', monospace",
                fontSize: 12,
                color: 'var(--text-3)',
                width: 'fit-content',
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  flexShrink: 0,
                }}
              />
              {hero.status}
            </div>

            {/* Meta line */}
            <p
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: 13,
                color: 'var(--muted)',
                margin: 0,
              }}
            >
              {hero.meta}
            </p>

            {/* H1 */}
            <h1
              style={{
                fontSize: 'clamp(42px, 7.4vw, 100px)',
                fontWeight: 600,
                lineHeight: 0.98,
                letterSpacing: '-0.045em',
                maxWidth: '15ch',
                margin: 0,
                color: 'var(--text)',
              }}
            >
              I build and ship production SaaS -{' '}
              <span style={{ color: 'var(--accent)' }}>end to end.</span>
            </h1>

            {/* Sub */}
            <p
              style={{
                fontSize: 'clamp(17px, 1.7vw, 21px)',
                color: '#A8A8A8',
                maxWidth: '46ch',
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {hero.sub}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={hero.cta.primary.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: 50,
                  padding: '0 24px',
                  borderRadius: 10,
                  background: 'var(--accent)',
                  color: '#0A0A0A',
                  fontWeight: 600,
                  fontSize: 16,
                  textDecoration: 'none',
                  transition: 'transform .15s ease',
                  transform: primaryHover ? 'translateY(-1px)' : 'translateY(0)',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={() => setPrimaryHover(true)}
                onMouseLeave={() => setPrimaryHover(false)}
              >
                {hero.cta.primary.label}
              </a>

              <a
                href={hero.cta.secondary.href}
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  height: 50,
                  padding: '0 24px',
                  borderRadius: 10,
                  border: `1px solid ${secondaryHover ? 'var(--text)' : 'var(--border-btn)'}`,
                  color: 'var(--text)',
                  fontWeight: 500,
                  fontSize: 16,
                  textDecoration: 'none',
                  transition: 'border-color .15s ease',
                  background: 'transparent',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={() => setSecondaryHover(true)}
                onMouseLeave={() => setSecondaryHover(false)}
              >
                {hero.cta.secondary.label}
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: 11,
                    color: 'var(--muted)',
                    border: '1px solid var(--border-chip)',
                    padding: '2px 5px',
                    borderRadius: 4,
                    lineHeight: 1.4,
                  }}
                >
                  {hero.cta.secondary.tag}
                </span>
              </a>
            </div>
          </div>

          {/* ── Photo column ── */}
          <div style={{ flex: '0 1 340px', position: 'relative' }}>
            <div
              style={{
                aspectRatio: '4/5',
                borderRadius: 18,
                border: '1px solid var(--border-chip)',
                background: 'var(--frame-2)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {photoError ? (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    border: '1px dashed var(--border-chip)',
                    borderRadius: 18,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: 13,
                      color: 'var(--subtle)',
                    }}
                  >
                    Your photo (portrait, 4:5)
                  </span>
                  <span
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      fontSize: 11,
                      color: 'var(--subtle)',
                    }}
                  >
                    → place at /public/images/emon.jpg
                  </span>
                </div>
              ) : (
                <img
                  src={hero.photo}
                  alt="Abdur Rahman Emon"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={() => setPhotoError(true)}
                />
              )}

              {/* Location chip */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 14,
                  left: 14,
                  background: 'rgba(10,10,10,.85)',
                  borderRadius: 8,
                  padding: '6px 10px',
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 11,
                  color: 'var(--text-3)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {hero.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
