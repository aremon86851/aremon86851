import React from "react";
import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import CommonComponent from "../../component/CommonComponent/CommonComponent";

const Home = () => (
  <>
    <div className="max-w-[1440px] mx-auto">
      <Banner />
      <CommonComponent />
    </div>
    <Footer />
  </>
);

export default Home;
