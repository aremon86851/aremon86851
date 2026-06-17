import React from "react";
import logo from "../../assest/1.jpg";
import linkedin from "../../assest/linkedin.png";
import github from "../../assest/github-1.png";
import fb from "../../assest/facebook.png";
import { Typewriter } from "react-simple-typewriter";
import "./banner.css";

const Banner = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="hero-container">
        {/* ── Left: text ── */}
        <div className="hero-text">
          <p className="hero-greeting">Hi there 👋</p>

          <h1 className="hero-name">Abdur Rahman Emon</h1>
          <p className="hero-title">Full-Stack Web Developer &amp; Software Engineer</p>

          <div className="hero-accent-bar" />

          <p className="hero-tagline">
            I build and ship production-grade web apps and SaaS products for
            clients in Bangladesh and internationally.
          </p>

          <div className="hero-badges">
            <span className="hero-badge hero-badge-exp">✦ 3+ Years Experience</span>
            <span className="hero-badge hero-badge-loc">📍 Gazipur, Bangladesh</span>
          </div>

          <p className="hero-role-line">
            I&apos;m a{" "}
            <span className="hero-typewriter">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "React / Next.js Engineer",
                  "Node.js Developer",
                  "SaaS Builder",
                  "WooCommerce Expert",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={55}
                deleteSpeed={40}
                delaySpeed={1400}
              />
            </span>
          </p>

          <div className="hero-buttons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1pykTYwl7exOiLEuVi539xsQ0p407r4u2/view?usp=sharing"
              className="btn-hero-preview"
            >
              Preview Resume
            </a>
            <a download href="resume_aremon.pdf" className="btn-hero-download">
              ↓ Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://www.facebook.com/emon.1630/" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="https://github.com/aremon86851" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/aremon8685/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* ── Right: profile photo ── */}
        <div className="hero-photo-wrapper">
          <div className="hero-photo-ring">
            <img src={logo} alt="Abdur Rahman Emon" className="hero-photo" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
