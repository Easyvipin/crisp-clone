import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import Touch from "./Touch";

const Contactpage = () => {
  return (
    <>
      <div className="container-full p-6 border-bottom contact-banner">
        <div className="content-65">
          <h5 className="text-center thin primary-text">
            THE CAPITAL RAISING PLATFORM FOR <strong>YOUR BUSINESS</strong>
          </h5>
        </div>
      </div>
      <Touch />
    </>
  );
};

export default Contactpage;
