import React from "react";
import Heading from "../Heading/Heading";
import img1 from "../../assest/luxury-hunt.png";
import img2 from "../../assest/BoxStudio.png";
import img3 from "../../assest/EduTech.png";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "./project.css";

const Project = () => {
  return (
    <div className="my-10" id="projects">
      <div>
        <Heading>Projects...</Heading>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-2 md:mx-10 lg:mx-0">
            <div
              // data-aos="fade-right"
              className="single-project bg-base-300 py-3 px-4 text-left rounded-tl-2xl rounded-br-2xl"
            >
              <div>
                <PhotoProvider>
                  <PhotoView src={img1}>
                    <img
                      className="object-cover h-52 w-full"
                      src={img1}
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div>
                <div className="flex flex-col w-full">
                  <div className="flex md:justify-between md:items-center md:flex-row items-start flex-col justify-start py-2">
                    <h2 className="text-3xl text-white font-semibold mt-3 mb-2">
                      Luxury Hunt
                    </h2>
                    <Link to="/luxury">
                      <button className="btn btn-sm mr-2 text-white w-full">
                        View details
                      </button>
                    </Link>
                  </div>
                  <div className="flex justify-end">
                    <p className="text-right italic w-80">
                      <span className="badge text-white mr-2">Reactjs</span>
                      <span className="badge text-white mr-2">Javascript</span>
                      <span className="badge text-white mr-2">XML</span>
                      <span className="badge text-white mr-2">Tailwind</span>
                      <span className="badge text-white mr-2">Css</span>
                      <span className="badge text-white mr-2">Html</span>
                      <span className="badge text-white mr-2">Firebase</span>
                    </p>
                  </div>
                  <div className="divider mt-2 mb-0"></div>
                  <div className="mt-2 flex md:justify-end justify-start pb-2">
                    <div className="md:block flex flex-col gap-2 w-full">
                      <span>
                        <a href="https://luxury-hunt.web.app/" target="_blank">
                          <button className="btn btn-xs bg-primary mr-2 text-white  md:mb-2 mb-0 md:w-28 w-full">
                            Live Demo
                          </button>
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://github.com/aremon86851/Luxury-Hunt"
                          target="_blank"
                        >
                          <button className="btn btn-xs bg-secondary mr-2 text-white  md:mb-2 mb-0 md:w-28 w-full">
                            Client Github
                          </button>
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://github.com/aremon86851/Luxury-Hunt-Server"
                          target="_blank"
                        >
                          <button className="btn btn-xs bg-accent text-black mr-2 hover:text-white  md:mb-2 mb-0 md:w-28 w-full">
                            Server Github
                          </button>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              // data-aos="fade-up-right"
              className="single-project bg-base-300 py-3 px-4 text-left rounded-tl-2xl rounded-br-2xl"
            >
              <div>
                <PhotoProvider>
                  <PhotoView src={img2}>
                    <img
                      className="object-cover h-52 w-full"
                      src={img2}
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div>
                <div className="flex flex-col w-full">
                  <div className="flex md:justify-between md:items-center md:flex-row items-start flex-col justify-start py-2">
                    <h2 className="text-3xl text-white font-semibold mt-3 mb-2">
                      Box Studio
                    </h2>
                    <Link to="/boxstudio">
                      <button className="btn btn-sm mr-2 text-white">
                        View details
                      </button>
                    </Link>
                  </div>
                  <div className="flex justify-end">
                    <p className="text-right italic w-80">
                      <span className="badge text-white mr-2">Reactjs</span>
                      <span className="badge text-white mr-2">Javascript</span>
                      <span className="badge text-white mr-2">XML</span>
                      <span className="badge text-white mr-2">Tailwind</span>
                      <span className="badge text-white mr-2">Css</span>
                      <span className="badge text-white mr-2">Html</span>
                      <span className="badge text-white mr-2">Firebase</span>
                    </p>
                  </div>
                  <div className="divider mt-2 mb-0"></div>
                  <div className="mt-2 flex md:justify-end justify-start pb-2">
                    <div className="md:block flex flex-col gap-2 w-full">
                      <span>
                        <a
                          href="https://assignment11-3419d.web.app/"
                          target="_blank"
                        >
                          <button className="btn btn-xs bg-primary mr-2 text-white  md:mb-2 mb-0 md:w-28 w-full">
                            Live Demo
                          </button>
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://github.com/aremon86851/box-studio"
                          target="_blank"
                        >
                          <button className="btn btn-xs bg-secondary mr-2 text-white  md:mb-2 mb-0 md:w-28 w-full">
                            Client Github
                          </button>
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://github.com/aremon86851/box-studio-server"
                          target="_blank"
                        >
                          <button className="btn btn-xs bg-accent text-black mr-2 hover:text-white  md:mb-2 mb-0 md:w-28 w-full">
                            Server Github
                          </button>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              // data-aos="fade-left"
              className="single-project bg-base-300 py-3 px-4 text-left rounded-tl-2xl rounded-br-2xl"
            >
              <div>
                <PhotoProvider>
                  <PhotoView src={`${img3}`}>
                    <img
                      className="object-cover h-52 w-full"
                      src={img3}
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              <div>
                <div className="flex flex-col w-full">
                  <div className="flex md:justify-between md:items-center md:flex-row items-start flex-col justify-start py-2">
                    <h2 className="text-3xl text-white font-semibold mt-3 mb-2">
                      Edu tech
                    </h2>
                    <Link to="/edutech">
                      <button className="btn btn-sm mr-2 text-white">
                        View details
                      </button>
                    </Link>
                  </div>
                  <div className="flex justify-end">
                    <p className="text-right italic w-80">
                      <span className="badge text-white mr-2">Reactjs</span>
                      <span className="badge text-white mr-2">Javascript</span>
                      <span className="badge text-white mr-2">XML</span>
                      <span className="badge text-white mr-2">Tailwind</span>
                      <span className="badge text-white mr-2">Css</span>
                      <span className="badge text-white mr-2">Html</span>
                      <span className="badge text-white mr-2">Firebase</span>
                    </p>
                  </div>
                  <div className="divider mt-2 mb-0"></div>
                  <div className="mt-2 flex md:justify-end justify-start pb-2">
                    <div className="md:block flex flex-col gap-2  w-full">
                      <span>
                        <a
                          href="https://assignment-10-e55e6.web.app/"
                          target="_blank"
                        >
                          <button className="btn btn-xs bg-primary mr-2  text-white md:mb-2 mb-0 md:w-28 w-full">
                            Live Demo
                          </button>
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://github.com/aremon86851/edu-tech"
                          target="_blank"
                        >
                          <button className="btn btn-xs bg-secondary mr-2 md:mb-2 mb-0 text-white md:w-28 w-full">
                            Client Github
                          </button>
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://github.com/aremon86851/edu-tech-server"
                          target="_blank"
                        >
                          <button className="btn btn-xs bg-accent text-black mr-2 hover md:mb-2 mb-0:text-white md:w-28 w-full">
                            Server Github
                          </button>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
