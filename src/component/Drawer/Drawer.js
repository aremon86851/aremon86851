import React, { useEffect, useState } from 'react';
import { useDrawer } from './DrawerContext';

/* Domains that block iframes — show a fallback card instead */
const BLOCKED_DOMAINS = [
  'linkedin.com',
  'github.com',
  'youtube.com',
  'youtu.be',
  'play.google.com',
  'google.com',
  'facebook.com',
  'instagram.com',
  'twitter.com',
  'x.com',
];

const isBlocked = (url) => {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    return BLOCKED_DOMAINS.some((d) => host === d || host.endsWith('.' + d));
  } catch {
    return false;
  }
};

/* Map domain → display label */
const domainLabel = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

/* ── Blocked-domain fallback card ── */
const BlockedFallback = ({ url, title }) => {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        padding: 40,
        background: 'var(--surface)',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          border: '1px solid var(--border-chip)',
          background: 'var(--surface-2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
        }}
      >
        🔒
      </div>

      {/* Text */}
      <div style={{ textAlign: 'center', maxWidth: 360 }}>
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: 'var(--text)',
            marginBottom: 10,
          }}
        >
          Preview not available
        </div>
        <div
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: 13,
            color: 'var(--muted)',
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: 'var(--accent)' }}>{domainLabel(url)}</span> blocks
          embedding for security reasons. Click below to open it directly.
        </div>
      </div>

      {/* CTA */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          height: 44,
          padding: '0 20px',
          borderRadius: 10,
          background: btnHover ? 'var(--accent)' : 'transparent',
          border: `1px solid ${btnHover ? 'var(--accent)' : 'var(--border-chip)'}`,
          color: btnHover ? '#0A0A0A' : 'var(--text)',
          fontWeight: 600,
          fontSize: 14,
          textDecoration: 'none',
          transition: 'background .15s, color .15s, border-color .15s',
          fontFamily: 'inherit',
        }}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
      >
        Open {title || domainLabel(url)} ↗
      </a>
    </div>
  );
};

/* ── Main Drawer ── */
const Drawer = () => {
  const { open, url, title, closeDrawer } = useDrawer();
  const [loaded, setLoaded] = useState(false);
  const [externalHover, setExternalHover] = useState(false);
  const [closeHover, setCloseHover] = useState(false);

  const blocked = url ? isBlocked(url) : false;

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeDrawer(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [closeDrawer]);

  useEffect(() => { setLoaded(false); }, [url]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!url) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,.65)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          zIndex: 100,
          opacity: open ? 1 : 0,
          transition: 'opacity .25s ease',
          pointerEvents: open ? 'auto' : 'none',
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title || url}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(92vw, 1000px)',
          background: 'var(--surface)',
          borderLeft: '1px solid var(--border)',
          zIndex: 101,
          display: 'flex',
          flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform .3s cubic-bezier(.4,0,.2,1)',
          boxShadow: '-24px 0 80px rgba(0,0,0,.6)',
        }}
      >
        {/* ── Header bar ── */}
        <div
          style={{
            height: 52,
            flexShrink: 0,
            borderBottom: '1px solid var(--border)',
            background: 'var(--frame-2)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', gap: 6 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  background: 'var(--border-btn)',
                }}
              />
            ))}
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: 12,
                color: 'var(--muted)',
                background: '#1C1C1C',
                border: '1px solid var(--border)',
                padding: '4px 16px',
                borderRadius: 6,
                maxWidth: 360,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {url.replace(/^https?:\/\//, '')}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title="Open in new tab"
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: 12,
                color: externalHover ? 'var(--text)' : 'var(--muted)',
                textDecoration: 'none',
                border: `1px solid ${externalHover ? 'var(--border-chip)' : 'var(--border)'}`,
                borderRadius: 6,
                padding: '5px 10px',
                transition: 'color .15s, border-color .15s',
                lineHeight: 1,
              }}
              onMouseEnter={() => setExternalHover(true)}
              onMouseLeave={() => setExternalHover(false)}
            >
              ↗
            </a>
            <button
              onClick={closeDrawer}
              aria-label="Close preview"
              style={{
                background: 'transparent',
                border: `1px solid ${closeHover ? 'var(--border-chip)' : 'var(--border)'}`,
                borderRadius: 6,
                color: closeHover ? 'var(--text)' : 'var(--muted)',
                cursor: 'pointer',
                padding: '5px 10px',
                fontFamily: "'Geist Mono', monospace",
                fontSize: 13,
                transition: 'color .15s, border-color .15s',
                lineHeight: 1,
              }}
              onMouseEnter={() => setCloseHover(true)}
              onMouseLeave={() => setCloseHover(false)}
            >
              ✕
            </button>
          </div>
        </div>

        {/* ── Content area ── */}
        {blocked ? (
          <BlockedFallback url={url} title={title} />
        ) : (
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            {!loaded && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 14,
                  background: 'var(--surface)',
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: '2px solid var(--border)',
                    borderTopColor: 'var(--accent)',
                    borderRadius: '50%',
                    animation: 'drawer-spin .7s linear infinite',
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: 12,
                    color: 'var(--muted)',
                  }}
                >
                  Loading preview…
                </span>
              </div>
            )}
            <iframe
              key={url}
              src={url}
              title={title || url}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                opacity: loaded ? 1 : 0,
                transition: 'opacity .2s ease',
              }}
              onLoad={() => setLoaded(true)}
            />
          </div>
        )}
      </div>

      <style>{`@keyframes drawer-spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
};

export default Drawer;
