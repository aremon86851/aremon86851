import React from "react";
import Heading from "../Heading/Heading";
import htmlIcon from "../../assest/html.png";
import cssIcon from "../../assest/css.png";
import jsIcon from "../../assest/js.png";
import reactIcon from "../../assest/react.png";
import nextjsIcon from "../../assest/nextjs.jpg";
import tailwindIcon from "../../assest/tailwind.png";
import bootstrapIcon from "../../assest/bootstrap.png";
import nodejsIcon from "../../assest/nodejs.png";
import expressIcon from "../../assest/express.png";
import mongodbIcon from "../../assest/mongodb.png";
import firebaseIcon from "../../assest/ant-design.png";
import wordpressIcon from "../../assest/wordpress.png";
import woocommerceIcon from "../../assest/woocommerce.png";
import elementorIcon from "../../assest/elementor.png";
import vsCodeIcon from "../../assest/visual-studio.png";
import githubIcon from "../../assest/github-1.png";
import "./skills.css";

const categories = [
  {
    label: "Frontend",
    cls: "fe",
    skills: [
      { name: "React.js", icon: reactIcon },
      { name: "Next.js", icon: nextjsIcon },
      { name: "TypeScript", icon: null },
      { name: "Redux / RTK", icon: null },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "Figma", icon: null },
      { name: "Responsive Design", icon: null },
    ],
  },
  {
    label: "Backend & Database",
    cls: "be",
    skills: [
      { name: "Node.js", icon: nodejsIcon },
      { name: "Express.js", icon: expressIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "Mongoose", icon: null },
      { name: "PostgreSQL", icon: null },
      { name: "REST API", icon: null },
      { name: "Firebase", icon: null },
      { name: "Prisma", icon: null },
      { name: "JWT Auth", icon: null },
      { name: "SSLCommerz", icon: null },
    ],
  },
  {
    label: "CMS & E-Commerce",
    cls: "cms",
    skills: [
      { name: "WordPress", icon: wordpressIcon },
      { name: "WooCommerce", icon: woocommerceIcon },
      { name: "Elementor", icon: elementorIcon },
    ],
  },
  {
    label: "Tools & Platforms",
    cls: "tools",
    skills: [
      { name: "Git / GitHub", icon: githubIcon },
      { name: "VS Code", icon: vsCodeIcon },
      { name: "Postman", icon: null },
      { name: "Vercel", icon: null },
      { name: "Netlify", icon: null },
    ],
  },
];

const Skills = () => (
  <>
    <Heading>Skills</Heading>
    {categories.map((cat) => (
      <div key={cat.label} className="skill-section">
        <p className="skill-category-title">{cat.label}</p>
        <div className="skill-pills">
          {cat.skills.map((s) => (
            <span key={s.name} className={`skill-pill ${cat.cls}`}>
              {s.icon && (
                <img
                  src={s.icon}
                  alt={s.name}
                  style={s.name === "Express.js" ? { borderRadius: "50%", background: "rgba(255,255,255,0.1)", padding: "1px" } : {}}
                />
              )}
              {s.name}
            </span>
          ))}
        </div>
      </div>
    ))}
  </>
);

export default Skills;
