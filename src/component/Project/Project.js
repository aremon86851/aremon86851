import React from "react";
import Heading from "../Heading/Heading";
import "react-photo-view/dist/react-photo-view.css";
import "./project.css";

/* ─── Project data ─────────────────────────────────────────── */
const featured = {
  title: "Scanalyzr",
  isLive: true,
  desc: "QR code analytics platform — real-time scan tracking with location, device, and timestamp data. Freemium SaaS with a live analytics dashboard.",
  tags: ["React", "Node.js", "Express", "MongoDB", "REST API", "JWT"],
  live: "https://scanalyzr.com",
  github: null,
  gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  initial: "S",
  initialColor: "#22d3ee",
};

const projects = [
  {
    title: "HisabKhata",
    isLive: false,
    desc: "Baki/credit management app for Bangladeshi shopkeepers — community-sourced fraud detection, Bengali UI, freemium model.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    live: null,
    github: null,
    gradient: "linear-gradient(135deg, #1a0533, #2d1b69, #11044e)",
    initial: "HK",
    initialColor: "#a78bfa",
  },
  {
    title: "University Management",
    isLive: false,
    desc: "Role-based academic backend — students, faculty, courses with permissions middleware and auto-ID generation.",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    live: null,
    github: "https://github.com/aremon86851",
    gradient: "linear-gradient(135deg, #0a2818, #14532d, #052e16)",
    initial: "UMS",
    initialColor: "#34d399",
  },
];

/* ─── Reusable components ──────────────────────────────────── */
const Tags = ({ tags }) => (
  <div className="proj-tags">
    {tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
  </div>
);

const FeaturedCard = ({ p }) => (
  <div className="proj-card proj-card-featured mb-6">
    {/* Gradient placeholder thumbnail */}
    <div className="proj-thumb-wrapper" style={{ position: "relative" }}>
      <div
        className="proj-thumb-placeholder"
        style={{ background: p.gradient, color: p.initialColor }}
      >
        {p.initial}
      </div>
      {p.isLive && <span className="proj-badge-live">LIVE</span>}
    </div>

    <div className="proj-body">
      <h2 className="proj-title">{p.title}</h2>
      <p className="proj-desc">{p.desc}</p>
      <Tags tags={p.tags} />
      <div className="proj-divider" />
      <div className="proj-links">
        {p.live && (
          <a href={p.live} target="_blank" rel="noreferrer" className="proj-btn proj-btn-live">↗ Visit Site</a>
        )}
        {p.github
          ? <a href={p.github} target="_blank" rel="noreferrer" className="proj-btn proj-btn-gh">GitHub</a>
          : <span className="proj-btn proj-btn-ph">Private Repo</span>
        }
      </div>
    </div>
  </div>
);

const ProjectCard = ({ p }) => (
  <div className="proj-card">
    <div className="proj-thumb-wrapper" style={{ position: "relative" }}>
      <div
        className="proj-thumb-placeholder"
        style={{ background: p.gradient, color: p.initialColor }}
      >
        {p.initial}
      </div>
      {p.isLive && <span className="proj-badge-live">LIVE</span>}
    </div>

    <div className="proj-body">
      <h2 className="proj-title">{p.title}</h2>
      <p className="proj-desc">{p.desc}</p>
      <Tags tags={p.tags} />
      <div className="proj-divider" />
      <div className="proj-links">
        {p.live
          ? <a href={p.live} target="_blank" rel="noreferrer" className="proj-btn proj-btn-live">↗ Live Demo</a>
          : <span className="proj-btn proj-btn-ph" title="Coming soon">No Demo Yet</span>
        }
        {p.github
          ? <a href={p.github} target="_blank" rel="noreferrer" className="proj-btn proj-btn-gh">GitHub</a>
          : <span className="proj-btn proj-btn-ph">Private Repo</span>
        }
      </div>
    </div>
  </div>
);

/* ─── Main export ──────────────────────────────────────────── */
const Project = () => (
  <div id="projects" className="my-2 pb-6">
    <Heading>Projects</Heading>

    <p className="proj-github-note">
      More on{" "}
      <a href="https://github.com/aremon86851?tab=repositories" target="_blank" rel="noreferrer">
        my GitHub
      </a>
      . Private repos available on request.
    </p>

    {/* Featured */}
    <FeaturedCard p={featured} />

    {/* Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
    </div>
  </div>
);

export default Project;
