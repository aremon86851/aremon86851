import React from "react";
import Heading from "../Heading/Heading";
import htmlIcon from "../../assest/html.png";
import cssIcon from "../../assest/css.png";
import jsIcon from "../../assest/js.png";
import bootstrapIcon from "../../assest/bootstrap.png";
import tailwindIcon from "../../assest/tailwind.png";
import antDesignIcon from "../../assest/ant-design.png";
import reactIcon from "../../assest/react.png";
import expressIcon from "../../assest/express.png";
import nodejsIcon from "../../assest/nodejs.png";
import elementorIcon from "../../assest/elementor.png";
import woocommerceIcon from "../../assest/woocommerce.png";
import choromeDevIcon from "../../assest/chorome-dev.png";
import vsCodeIcon from "../../assest/visual-studio.png";
import wordpressIcon from "../../assest/wordpress.png";
import moreIcon from "../../assest/more.svg";
import "./skills.css";

const Skills = () => {
  const skillsArray = [
    {
      icon: htmlIcon,
      name: "Html",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-right",
    },
    {
      icon: cssIcon,
      name: "Css",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-down",
    },
    {
      icon: jsIcon,
      name: "JavaScript",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-up",
    },
    {
      icon: bootstrapIcon,
      name: "Bootstrap",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-down",
    },
    {
      icon: tailwindIcon,
      name: "Tailwind",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-left",
    },
    {
      icon: antDesignIcon,
      name: "Ant Design",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-right",
    },
    {
      icon: reactIcon,
      name: "React",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-down",
    },
    {
      icon: expressIcon,
      name: "Express.js",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-up",
    },
    {
      icon: nodejsIcon,
      name: "Node.js",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-down",
    },
    {
      icon: elementorIcon,
      name: "Elementor",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-left",
    },
    {
      icon: woocommerceIcon,
      name: "WooCommerce",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-right",
    },
    {
      icon: choromeDevIcon,
      name: "Chrome Dev",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-down",
    },
    {
      icon: vsCodeIcon,
      name: "VS Code",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-up",
    },
    {
      icon: wordpressIcon,
      name: "Wordpress",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-down",
    },
    {
      icon: moreIcon,
      name:"More...",
      details:
        "Html is piller of all website. When we know how to handle a html file then we can optimized our website greately and we can link some of uniqueness",
      animationType: "fade-down",
      link: "https://www.linkedin.com/in/aremon8685/details/skills/"
    },
  ];
  return (
    <>
      <Heading>Skills...</Heading>
      <div
        className="skills-container grid xl:grid-cols-3 sm:grid-cols-2 gap-4 items-center"
        id="skills"
      >
        {skillsArray ? (
          <>
            {skillsArray?.map((skill,i) => (
              <>
              <a href={skill?.link}>
                <div
                  // data-aos={skill?.animationType}
                  className={`card`}
                >
                  <img
                    src={skill?.icon}
                    alt="1"
                    className={`${
                      skill.icon === expressIcon
                        ? "card-image rounded-full"
                        : "card-image"
                    }`}
                  />
                  {
                    skill?.name && <h2 className="card-heading">{skill.name}</h2>
                  }
                  
                  {/* <p className="card-details">{skill?.details}</p> */}
                </div>
              </a>
              </>
            ))}
          </>
        ) : (
          <>
            <div class="container-spinner">
              <div>
                <div class="spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Skills;
