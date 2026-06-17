import React from "react";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Experience from "./Experiences/Experience";
import Education from "./Education/Education";

const tabs = [
  { id: "skills",     label: "Skills" },
  { id: "projects",   label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education" },
];

const content = {
  skills:     <Skills />,
  projects:   <Project />,
  experience: <Experience />,
  education:  <Education />,
};

const TabControl = ({ activeTab, setActiveTab }) => (
  <div>
    {/* Tab bar */}
    <div className="flex gap-2 mb-6 flex-wrap">
      {tabs.map(({ id, label }) => {
        const active = activeTab === id;
        return (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            style={
              active
                ? {
                    padding: "8px 20px", borderRadius: "999px",
                    fontSize: "13px", fontWeight: 700,
                    background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
                    color: "#0d1117", border: "none",
                    boxShadow: "0 0 16px rgba(34,211,238,0.35)",
                    cursor: "pointer", transition: "all 0.22s ease",
                  }
                : {
                    padding: "8px 20px", borderRadius: "999px",
                    fontSize: "13px", fontWeight: 500,
                    background: "rgba(255,255,255,0.04)",
                    color: "#94a3b8",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer", transition: "all 0.22s ease",
                  }
            }
            onMouseEnter={e => {
              if (!active) {
                e.currentTarget.style.color = "#e2e8f0";
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.35)";
              }
            }}
            onMouseLeave={e => {
              if (!active) {
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }
            }}
          >
            {label}
          </button>
        );
      })}
    </div>

    {/* Content */}
    <div>{content[activeTab]}</div>
  </div>
);

export default TabControl;
