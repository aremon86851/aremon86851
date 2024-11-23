import React from "react";
import Heading from "../Heading/Heading";
import "./experience.css";
const Experience = () => {
  return (
    <div className="pb-10" id="experience">
      <Heading>Experience</Heading>
      <div
        style={{ background: "#373737", borderRadius: "12px" }}
        className="card bg-base-100 shadow-xl text-left"
        // data-aos="fade-right"
      >
        <div className="card-body text-white">
          <div>
            <h2 className="card-title text-white mb-1">
              CodeRower Software Private Limited
            </h2>
            <h4 className="text-gray-400 text-sm">Full-Time</h4>
            {/* <h4 className="text-gray-400 text-sm">Jan, 2023 - Present</h4> */}
            <h4 className="text-gray-400 text-sm">
              Gurugram, Haryana, India - Remote
            </h4>
          </div>
          <div className="sm:pl-5 pl-3">
            <ul className="steps steps-vertical">
              <li className="step step-primary text-left">
                <div className="mt-5 text-left">
                  <span className="font-semibold">Software Engineer</span>
                  <h4 className="text-gray-400 text-sm">Aug, 2023 - Present</h4>
                </div>
              </li>
              <li className="step step-primary">
                <div className="mt-5 text-left">
                  <span className="font-semibold">Frontend developer</span>
                  <h4 className="text-gray-400 text-sm">
                    Jan, 2023 - Jul, 2023
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{ background: "#373737", borderRadius: "12px" }}
        className="card bg-base-100 shadow-xl text-left mt-5"
        // data-aos="fade-left"
      >
        <div className="card-body text-white">
          <div>
            <h2 className="card-title text-white mb-1">Spyde Agency</h2>
            <h4 className="text-gray-400 text-sm">Part-Time</h4>
            {/* <h4 className="text-gray-400 text-sm">Jan, 2023 - Present</h4> */}
            <h4 className="text-gray-400 text-sm">
              Dhaka, Bangladesh - Remote
            </h4>
          </div>
          <div className="sm:pl-5 pl-3">
            <ul className="steps steps-vertical">
              <li className="step step-primary text-left">
                <div className="mt-5 text-left">
                  <span className="font-semibold">Web developer</span>
                  <h4 className="text-gray-400 text-sm">Jun, 2023 - Present</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{ background: "#373737", borderRadius: "12px" }}
        className="card bg-base-100 shadow-xl text-left mt-5"
        // data-aos="fade-right"
      >
        <div className="card-body text-white">
          <div>
            <h2 className="card-title text-white mb-1">Freelancer</h2>
            <h4 className="text-gray-400 text-sm">Full-Time</h4>
          </div>
          <div className="sm:pl-5 pl-3">
            <ul className="steps steps-vertical">
              <li className="step step-primary text-left">
                <div className="mt-5 text-left">
                  <span className="font-semibold text-left">Web developer</span>
                  <h4 className="text-gray-400 text-sm">
                    Mar, 2022 - Dec, 2022
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
