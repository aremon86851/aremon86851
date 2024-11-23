import React from "react";
import img from "../../assest/portfoliopng.png";
import img1 from "../../assest/Emon-Emon.jpg";
import fb from "../../assest/facebook.png";
import github from "../../assest/github-1.png";
import linkedin from "../../assest/linkedin.png";
import logo from "../../assest/1.jpg";
import coverPhoto from "../../assest/cover-photo.jpg";
import quotes from "../../assest/QUOTES.png";
import { Typewriter } from "react-simple-typewriter";
import "./banner.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Banner = () => {
  return (
    <div className="">
      {/* <section className="text-gray-600 body-font">
        <div className="lg:mx-auto px-5 py-24 items-center">
          <div class="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div data-aos="fade-right" className="flex flex-col w-full text-center">
              <div className="ml-2">
                <h1 className="text-white text-7xl font-semibold"><span>🖐</span></h1>
                <h1 className="text-7xl uppercase text-white text-center font-bold">
                  Abdur Rahman Emon
                </h1>
                <h2 className="text-white text-2xl md:text-4xl font-semibold mt-6 ">
                  <span className="bg-base-300 py-2 px-6 rounded-2xl text-black">
                    I'm a{" "}
                    <span className="text-red-600 ">
                      <Typewriter
                        words={[
                          "Frontend Developer ",
                          "MERN Stack Developer ",
                          "Web Developer ",
                          "Full Stack Developer ",
                          "WooCommerce Expert ",
                          "Elementor Expert ",
                        ]}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>
                  </span>
                </h2>
                <div className="mt-7">
                  <div className="flex w-full justify-center">
                    <a download href="resume_aremon.pdf">
                      <button className="btn btn-primary mb-0">
                        Download resume
                      </button>
                    </a>
                    <div className="divider divider-horizontal m-0"></div>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1UszVZuPHUZcqpbqF75LofTtrZqzwzPNb/view?usp=share_link"
                    >
                      <button className="btn btn-success mb-0">
                        Preview resume
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="divider w-96 m-2"></div>
              <div className="flex gap-2 ml-2 justify-center md:justify-start">
                <img className="w-8 cursor-pointer" src={fb} alt="" />
                <img className="w-8 cursor-pointer" src={github} alt="" />
                <img className="w-8 cursor-pointer" src={linkedin} alt="" />
              </div>
              <div className="gap-2 ml-2 justify-center md:justify-start">
                <img className="w-8 cursor-pointer" src={fb} alt="" />
                <img className="w-8 cursor-pointer" src={github} alt="" />
                <img className="w-8 cursor-pointer" src={linkedin} alt="" />
              </div>
            </div>
          </div>
        </div>

      </section> */}
      <section>
        <div className="top-profile-area">
          <div className="cover-photo">
            <div className="bg-gray-700 border-b-4 border-blue-700">
              <PhotoProvider>
                <PhotoView src={coverPhoto}>
                  <img src={coverPhoto} alt="cover img" />
                </PhotoView>
              </PhotoProvider>
            </div>
            <div className="logo-area xl:px-20 lg:px-10 px-4">
              <div className="flex md:items-center items-start md:gap-6 gap-3 justify-between md:flex-row flex-col ">
                <div className="logo-left flex md:items-center items-start flex-col md:flex-row  md:gap-6 gap-3">
                  <div
                    class="avatar tooltip md:-mt-20 -mt-[12%]"
                    data-tip="Click for view"
                  >
                    <div class="md:w-40 w-1/4 rounded-full ring ring-blue-700 ring-offset-base-100 ring-offset-2">
                      <PhotoProvider>
                        <PhotoView src={logo}>
                          <img src={logo} alt="logo" />
                        </PhotoView>
                      </PhotoProvider>
                    </div>
                  </div>
                  <h1 className="font-semibold text-white lg:text-3xl text-2xl">
                    Abdur Rahman Emon
                  </h1>
                </div>
                <div className="logo-right flex items-center sm:gap-6 gap-2 justify-end">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1pykTYwl7exOiLEuVi539xsQ0p407r4u2/view?usp=sharing"
                  >
                    <button className="btn btn-success w-36 btn-square  mb-0">
                      Preview resume
                    </button>
                  </a>
                  <a download href="resume_aremon.pdf">
                    <button className="btn btn-primary w-36 btn-square  mb-0">
                      Get resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
