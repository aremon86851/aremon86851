import React from "react";
import Heading from "../Heading/Heading";
import "./experience.css";

const experiences = [
  {
    company: "CodeRower Software Pvt. Ltd.",
    type: "Full-Time",
    location: "Gurugram, India — Remote",
    roles: [
      {
        title: "Software Engineer",
        period: "Aug 2023 — Present",
        note: "Build and maintain client-facing React/Next.js apps; integrate REST APIs with the backend team.",
      },
      {
        title: "Frontend Developer",
        period: "Jan 2023 — Jul 2023",
        note: "Promoted to Software Engineer within 7 months.",
      },
    ],
  },
  {
    company: "Freelance Web Developer",
    type: "Self-Employed",
    location: "Remote — BD, US, UK clients",
    roles: [
      {
        title: "Web Developer",
        period: "Mar 2022 — Dec 2022",
        note: "Custom websites and e-commerce stores — WordPress/WooCommerce/Elementor; SSLCommerz and bKash payment integrations.",
      },
    ],
  },
];

const Experience = () => (
  <div id="experience" className="pb-6">
    <Heading>Experience</Heading>

    {experiences.map((exp, i) => (
      <div key={i} className="exp-card">
        <div className="exp-header">
          <div>
            <h2 className="exp-company">{exp.company}</h2>
            <div className="exp-meta">
              <span className="exp-badge">{exp.type}</span>
              <span className="exp-location">{exp.location}</span>
            </div>
          </div>
        </div>

        <div className="exp-timeline">
          {exp.roles.map((role, j) => (
            <div key={j} className="exp-item">
              <p className="exp-role">{role.title}</p>
              <p className="exp-period">{role.period}</p>
              {role.note && <p className="exp-note">{role.note}</p>}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
