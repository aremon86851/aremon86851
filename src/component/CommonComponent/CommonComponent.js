import React, { useState } from "react";
import Contact from "./Contact";
import CodingImg from "../../assest/coding.png";
import TabControl from "../TabControl";

const glass = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
};

const Label = ({ text }) => (
  <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#22d3ee", marginBottom: "8px" }}>
    {text}
  </p>
);

const NavBtn = ({ label, active, onClick, badge }) => (
  <button
    onClick={onClick}
    style={{
      width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: "8px",
      padding: "8px 10px", borderRadius: "8px",
      fontSize: "13px", fontWeight: active ? 600 : 400,
      color: active ? "#22d3ee" : "#94a3b8",
      background: active ? "rgba(34,211,238,0.08)" : "transparent",
      borderLeft: active ? "2px solid #22d3ee" : "2px solid transparent",
      transition: "all 0.2s ease", cursor: "pointer", border: "none", outline: "none",
    }}
    onMouseEnter={e => { if (!active) { e.currentTarget.style.color = "#e2e8f0"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; } }}
    onMouseLeave={e => { if (!active) { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = "transparent"; } }}
  >
    {label}
    {badge && <span style={{ fontSize: "10px", color: "#475569", marginLeft: "4px" }}>{badge}</span>}
  </button>
);

const CommonComponent = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="md:pt-14 pt-6 xl:px-20 lg:px-10 relative pb-8">
      <div className="lg:flex block gap-6">

        {/* ── Sidebar ── */}
        <div className="flex-shrink-0">

          {/* Welcome card — always visible */}
          <div style={{ ...glass, padding: "20px", marginBottom: "14px" }} className="xl:w-80 lg:w-72 md:mx-0 mx-4">
            <p style={{ color: "#e2e8f0", fontSize: "13px", fontWeight: 500, textAlign: "center", marginBottom: "14px" }}>
              Hey, Welcome to my portfolio 🖐
            </p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px" }}>
              <Label text="About" />
              <p style={{ color: "#64748b", fontSize: "12px", lineHeight: "1.7", textAlign: "left" }}>
                Full-Stack developer with <span style={{ color: "#94a3b8", fontWeight: 600 }}>3+ years</span> building
                React/Next.js frontends and Node.js backends. Active SaaS builder with live products.
                Based in <span style={{ color: "#94a3b8" }}>Gazipur, Bangladesh</span>.
              </p>
            </div>
            {/* Contact — mobile only */}
            <div className="lg:hidden block" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "14px", paddingTop: "12px" }}>
              <Label text="Contact" />
              <Contact />
            </div>
          </div>

          {/* Sticky nav — desktop only */}
          <div
            style={{ ...glass, padding: "20px", position: "sticky", top: "12px" }}
            className="xl:w-80 lg:w-72 lg:flex flex-col justify-between hidden"
          >
            <div>
              <Label text="Navigate" />
              <div className="flex flex-col gap-1 mb-5">
                <NavBtn label="Skills"      active={activeTab === "skills"}      onClick={() => setActiveTab("skills")} />
                <NavBtn label="Projects"    active={activeTab === "projects"}    onClick={() => setActiveTab("projects")} />
                <NavBtn label="Experience"  active={activeTab === "experience"}  onClick={() => setActiveTab("experience")} />
                <NavBtn label="Education"   active={activeTab === "education"}   onClick={() => setActiveTab("education")} />
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px" }}>
                <Label text="Contact" />
                <Contact />
              </div>
            </div>
            <img
              src={CodingImg}
              alt=""
              style={{ width: "100%", opacity: 0.45, marginTop: "20px", filter: "drop-shadow(0 0 14px rgba(34,211,238,0.1))" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="lg:px-0 px-4 w-full min-w-0">
          <TabControl activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

      </div>
    </section>
  );
};

export default CommonComponent;
