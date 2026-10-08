import React, { useState } from 'react';
import { site } from '../../content/site';

const BrowserFrame = ({ url, screenshot, screenshotAlt, phoneScreenshot }) => (
  <div
    style={{
      borderRadius: 0,
      border: 'none',
      background: 'var(--frame)',
      overflow: 'visible',
      position: 'relative',
      height: '100%',
    }}
  >
    {/* Title bar */}
    <div
      style={{
        height: 36,
        background: 'var(--frame-2)',
        borderBottom: '1px solid #222',
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
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
            fontSize: 11,
            color: '#8A8A8A',
            background: '#1C1C1C',
            padding: '3px 12px',
            borderRadius: 6,
            maxWidth: 240,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {url}
        </div>
      </div>
    </div>

    {/* Screenshot area */}
    <div
      style={{
        aspectRatio: '16/10',
        background: 'var(--surface-2)',
        overflow: 'hidden',
        borderRadius: 0,
        position: 'relative',
      }}
    >
      {screenshot ? (
        <img
          src={screenshot}
          alt={screenshotAlt || `${url} screenshot`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px dashed var(--border-chip)',
          }}
        >
          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 12,
              color: 'var(--subtle)',
            }}
          >
            Screenshot ({url})
          </span>
        </div>
      )}

      {/* Phone overlay for Satheiro */}
      {phoneScreenshot && (
        <div
          style={{
            position: 'absolute',
            bottom: -24,
            right: -10,
            width: 'clamp(110px, 15vw, 180px)',
            aspectRatio: '9/19',
            border: '6px solid #1E1E1E',
            outline: '1px solid #333',
            borderRadius: 26,
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,.9)',
            background: '#0A0A0A',
            zIndex: 2,
          }}
        >
          <img
            src={phoneScreenshot}
            alt="Mobile app screenshot"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      )}
    </div>
  </div>
);

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? '#3A3A3A' : 'var(--border-card)'}`,
        borderRadius: 18,
        overflow: 'hidden',
        transition: 'border-color .2s ease',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {/* ── Left: info ── */}
      <div
        style={{
          flex: '1 1 340px',
          padding: 'clamp(22px, 3.4vw, 44px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 26,
        }}
      >
        {/* Top row: category + name + links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: 12,
                color: 'var(--accent)',
                marginBottom: 8,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {project.category}
            </div>
            <h3
              style={{
                fontSize: 'clamp(28px, 3vw, 38px)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                margin: 0,
                color: 'var(--text)',
              }}
            >
              {project.name}
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
            {project.links.map((link, i) => (
              <LinkChip key={i} href={link.href} label={link.label} />
            ))}
          </div>
        </div>

        {/* Problem */}
        <Block label="Problem" text={project.problem} />

        {/* What I built */}
        <Block label="What I built" text={project.built} />

        {/* Stack chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.stack.map((tech, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: 12,
                color: 'var(--text-3)',
                border: '1px solid var(--border-chip)',
                borderRadius: 6,
                padding: '5px 9px',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      {/* ── Right: visual ── */}
      <div
        style={{
          flex: '1.5 1 440px',
          background: 'var(--surface-2)',
          padding: 0,
          paddingBottom: project.phoneScreenshot ? 'clamp(50px, 6vw, 80px)' : 0,
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <BrowserFrame
          url={project.frameUrl}
          screenshot={project.screenshot}
          screenshotAlt={`${project.name} dashboard screenshot`}
          phoneScreenshot={project.phoneScreenshot}
        />
      </div>
    </article>
  );
};

const Block = ({ label, text }) => (
  <div>
    <div
      style={{
        fontFamily: "'Geist Mono', monospace",
        fontSize: 11,
        color: 'var(--subtle)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 8,
      }}
    >
      {label}
    </div>
    <p style={{ margin: 0, fontSize: 16, color: 'var(--text-2)', lineHeight: 1.55 }}>
      {text}
    </p>
  </div>
);

const LinkChip = ({ href, label }) => {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: "'Geist Mono', monospace",
        fontSize: 12,
        color: h ? 'var(--text)' : 'var(--text-3)',
        border: `1px solid ${h ? 'var(--border-chip)' : '#2E2E2E'}`,
        borderRadius: 8,
        padding: '5px 10px',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'border-color .15s, color .15s',
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {label}
    </a>
  );
};

const Work = () => {
  const { work } = site;

  return (
    <section id="work" className="section-border section-py">
      <div className="site-container">
        {/* Section header */}
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
            Live products
          </h2>
          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 12,
              color: 'var(--muted)',
            }}
          >
            {work.sectionLabel}
          </span>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {work.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
