import React from "react";
import Navigation from "./Navigation";
import Banner from "./Banner";
import Investor from "./Investor";
import Feature from "./Feature";
import Services from "./Services";
import Access from "./Access";
import Stats from "./Stats";
import percentone from "../crispimage/percent1.png";
import percenttwo from "../crispimage/percent2.png";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Banner />
      <Investor />
      <Feature />
      <Services />
      <Access />
      <Stats
        percent={"70"}
        header={"RAISE MORE CAPITAL"}
        subheader={"IN LESS TIME"}
        desc={
          "Approach your raise with confidence by using intuitive analytics, tools and a progress dashboard to increase your conversion rate and capital raise.ed"
        }
        imgpercent={percentone}
        background={"bg-primary"}
        align={"right"}
      />
      <Stats
        percent={"88"}
        header={"UTILISE PROVEN TEMPLATE"}
        subheader={"PROCESSES AND EDUCATION"}
        desc={
          "Often as Founders, we have expectations of how the capital raising process show goes. These are often wildly inaccurate. Our Capital Raising Success program provides you with resources and tools you require, so that you can confidently approach your next raise, avoiding the simple mistake commonly made."
        }
        imgpercent={percenttwo}
        background={"bg-light"}
        align={"left"}
      />
      <Contact />
    </>
  );
};

export default Home;
