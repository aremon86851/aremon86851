import React from "react";
import Heading from "../Heading/Heading";
import "./education.css";

const educations = [
  {
    icon: "🎓",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Atish Dipankar University of Science and Technology",
    period: "Jul 2024 — 2028 (Ongoing)",
    status: "In Progress",
    gpa: null,
  },
  {
    icon: "📜",
    degree: "Diploma in Computer Science & Engineering",
    institution: "Gazipur Ideal Polytechnic Institute",
    period: "2024",
    status: "Completed",
    gpa: "CGPA 3.68 / 4.00",
  },
];

const Education = () => (
  <div id="education" className="pb-6">
    <Heading>Education</Heading>

    {educations.map((edu, i) => (
      <div key={i} className="edu-card">
        <div className="edu-icon">{edu.icon}</div>
        <div className="edu-body">
          <h2 className="edu-degree">{edu.degree}</h2>
          <p className="edu-institution">{edu.institution}</p>
          <div className="edu-meta">
            <span className="edu-badge">{edu.period}</span>
            <span className="edu-status">{edu.status}</span>
            {edu.gpa && <span className="edu-badge">{edu.gpa}</span>}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Education;
