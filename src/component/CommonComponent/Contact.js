import React from "react";
import CallIcon from "../../assest/call.svg";
import GmailIcon from "../../assest/mail.svg";
import Linkedin from "../../assest/linkedin.svg";
import Github from "../../assest/github-1.png";
import Whatsapp from "../../assest/whatsapp.png";

const links = [
  { href: "https://www.linkedin.com/in/aremon8685/", icon: Linkedin, label: "/in/aremon8685/", isImg: false },
  { href: "https://github.com/aremon86851", icon: Github, label: "/aremon86851", isImg: true },
  { href: "https://wa.me/8801634571667", icon: Whatsapp, label: "+880 1634-571667", isImg: true },
  { href: "tel:+8801634571667", icon: CallIcon, label: "+880 1634-571667", isImg: false },
  { href: "mailto:aremon86851@gmail.com", icon: GmailIcon, label: "aremon86851@gmail.com", isImg: false },
];

const Contact = () => (
  <div className="flex flex-col gap-1">
    {links.map((item, i) => (
      <a
        key={i}
        href={item.href}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex", alignItems: "center", gap: "10px",
          padding: "7px 8px", borderRadius: "8px",
          color: "#94a3b8", fontSize: "12px", textDecoration: "none",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={e => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.style.background = "rgba(34,211,238,0.07)"; }}
        onMouseLeave={e => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = "transparent"; }}
      >
        <img
          src={item.icon}
          alt={item.label}
          className={item.isImg ? "w-4 h-4" : "w-4 h-4"}
          style={{ objectFit: "contain", flexShrink: 0, filter: "brightness(0) invert(0.55)" }}
        />
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.label}</span>
      </a>
    ))}
  </div>
);

export default Contact;
