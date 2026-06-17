import React from "react";

const Heading = ({ children }) => (
  <div style={{ marginBottom: "20px" }}>
    <h2
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontSize: "1.45rem",
        fontWeight: 700,
        letterSpacing: "0.04em",
        background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        marginBottom: "6px",
        textAlign: "left",
      }}
    >
      {children}
    </h2>
    <div
      style={{
        width: "44px", height: "2px",
        background: "linear-gradient(90deg, #22d3ee, #a78bfa)",
        borderRadius: "2px",
      }}
    />
  </div>
);

export default Heading;
