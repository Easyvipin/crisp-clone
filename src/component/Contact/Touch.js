import React from "react";
import Contactform from "./Contactform";
import support from "../../crispimage/support.png";
import demo from "../../crispimage/demo.png";

const Touch = () => {
  return (
    <section className="container-full p-6 contact-content">
      <div className="content-65">
        <h6 className="primary-text text-center">
          CONTACT US TO LEARN MORE ABOUT CRIISP
        </h6>
        <div className="row mt-4">
          <div className="col-50 contact-service">
            <div className="each-service primary-text">
              <img src={demo} alt="" />
              <h6>Book a demo</h6>
              <p>
                We'll happily run you through a demo of how to best use CRIISP
                to best fit your capital raising needs.
              </p>
            </div>
            <div className="each-service primary-text">
              <img src={support} alt="" />
              <h6>Chat with our Support</h6>
              <p>
                Our Customer Success team works around the clock to work with
                your schedule. We cover every step needed to ensure you have an
                amazing experience
              </p>
            </div>
          </div>
          <Contactform />
        </div>
      </div>
    </section>
  );
};

export default Touch;
