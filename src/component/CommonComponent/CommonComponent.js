import React, { useState } from "react";
import Line from "../../assest/line.png";
import Contact from "./Contact";
import CodingImg from "../../assest/coding.png";
import SkillsImg from "../../assest/skills.png";
import ToolsImg from "../../assest/tools.png";
import ProjectImg from "../../assest/projects.png";
import ExperienceImg from "../../assest/experience.png";
import TabControl from "../TabControl";
const CommonComponent = () => {
  const [activeTab, setActiveTab] = useState('skills');
  return (
    <section className="common-component md:pt-14 pt-6 xl:px-20 lg:px-10 relative">
      <div className="lg:flex block gap-6 ">
        <div className="common-component-left ">
          <div className="bg-gray-800 p-6 rounded-lg xl:w-80 lg:w-72 mb-6 md:mx-0 mx-4">
            <h3 className="text-white text-center mx-auto w-10/12">
              {" "}
              Hey, Welcome to my portfolio<span>🖐</span>
            </h3>
            <div>
              <h3 className="text-white flex items-center gap-4 my-5 font-semibold">
                Brief <img src={Line} alt="line" className="w-full h-7" />
              </h3>
              <p className="text-gray-400 text-left">
                I work as a software engineer at Coderower, where I contribute
                to the development of various software projects.
              </p>
              <p className="text-gray-400 text-left">
                Additionally, I am a freelance frontend developer, specializing
                in creating responsive and user-friendly web interfaces. My role
                involves designing and implementing visually appealing websites
                and web applications, ensuring a seamless user experience
              </p>
            </div>
            <div className="lg:hidden block">
              {/* <div className="btm-nav bg-transparent z-50">
                <button
                  className="rounded-none bg-[#570DF8]"
                  style={{ borderRight: " 2px solid rgb(63 81 135 / 37%)" }}
                >
                  <a href="#skills">
                    <img src={SkillsImg} className="w-6" alt="" />
                  </a>
                </button>
                <button
                  className="rounded-none bg-[#570DF8]"
                  style={{ borderRight: " 2px solid rgb(63 81 135 / 37%)" }}
                >
                  <a href="#tools">
                    <img src={ToolsImg} className="w-6" alt="" />
                  </a>
                </button>
                <button
                  className="rounded-none bg-[#570DF8]"
                  style={{ borderRight: " 2px solid rgb(63 81 135 / 37%)" }}
                >
                  <a href="#projects">
                    <img src={ProjectImg} className="w-6" alt="" />
                  </a>
                </button>
                <button
                  className="rounded-none bg-[#570DF8]"
                  style={{ borderRight: " 2px solid rgb(63 81 135 / 37%)" }}
                >
                  <a href="#experience">
                    <img src={ExperienceImg} className="w-6" alt="" />
                  </a>
                </button>
              </div> */}
            </div>
            <div className="lg:hidden block">
              <h3 className="text-white flex items-center gap-4 my-5 font-semibold">
                Contact <img src={Line} alt="line" className="w-full h-7" />
              </h3>
              <Contact />
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg xl:w-80 lg:w-72 sticky top-1 h-screen lg:flex flex-col justify-between  hidden">
            <div>
              <ul className="flex flex-col text-left rounded-box pl-2 mt-0">
                <li className="text-gray-300 text-base mb-2">
                  <p onClick={()=> setActiveTab("skills")} className="pl-0  pb-0">
                    Skills
                  </p>
                </li>
                <li className="text-gray-300 text-base mb-2">
                  <a href="#tools" className="pl-0 pb-0">
                    Tools <span className="text-xs text-gray-400">{`(coming soon...)`}</span>
                  </a>
                </li>
                <li className="text-gray-300 text-base mb-2">
                  <p onClick={()=> setActiveTab("projects")} className="pl-0  pb-0">
                    Projects
                  </p>
                </li>
                <li className="text-gray-300 text-base mb-2">
                  <p onClick={()=> setActiveTab("experiences")} className="pl-0  pb-0">
                    Experiences
                  </p>
                </li>
              </ul>
              {/* <div>
                <h3 className="text-white flex justify-between items-center gap-4 my-5 font-semibold">
                  Hire me <img src={Line} alt="line" className="w-8/12 h-7" />
                </h3>
                <ul className="flex flex-col text-left rounded-box pl-2 mt-0">
                  <li className="text-gray-300 text-base mb-2">
                    <a href="#skills" className="pl-0  pb-4">
                      As a Employee...
                    </a>
                  </li>
                  <li className="text-gray-300 text-base mb-2">
                    <a href="#tools" className="pl-0  pb-4">
                      As a Freelancer...
                    </a>
                  </li>
                </ul>
              </div> */}
              <div>
                <h3 className="text-white flex items-center gap-4 my-5 font-semibold">
                  Contact <img src={Line} alt="line" className="w-full h-7" />
                </h3>
                <Contact />
              </div>
            </div>
            <img src={CodingImg} alt="coding" />
          </div>
        </div>
        <div className="common-component-right lg:px-0 px-4 w-full">
          <TabControl activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
      </div>
    </section>
  );
};

export default CommonComponent;
