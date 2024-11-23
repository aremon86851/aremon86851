import React from "react";
import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import CommonComponent from "../../component/CommonComponent/CommonComponent";

const Home = () => {
  return (
    <>
      <div className="max-w-[1440px] xl:px-20 lg:px-10 md:px-4 mx-auto">
        {/* <div className='mt-10 md:mt-28'> */}
        {/* </div> */}
        <Banner></Banner>
        <CommonComponent />
        {/* <AboutMe></AboutMe> */}
        {/* <Skills></Skills> */}
        {/* <Projects></Projects> */}
        {/* <Project></Project> */}
        {/* <Contact></Contact> */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
