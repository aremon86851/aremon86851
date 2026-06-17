import React from "react";

const Footer = () => (
  <footer
    style={{
      textAlign: "center",
      padding: "20px 16px",
      marginTop: "8px",
      background: "rgba(255,255,255,0.02)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      color: "#475569",
      fontSize: "13px",
    }}
  >
    <p>
      © 2024{" "}
      <span
        style={{
          background: "linear-gradient(135deg, #22d3ee, #a78bfa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: 600,
        }}
      >
        Abdur Rahman Emon
      </span>
      {" "}— All rights reserved.
    </p>
  </footer>
);

export default Footer;
