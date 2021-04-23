import React from "react";
import serviceone from "../crispimage/service2.png";
import servicetwo from "../crispimage/service1.png";
import servicethree from "../crispimage/service3.png";
import servicefour from "../crispimage/service4.png";
import servicefive from "../crispimage/service5.png";
import servicesix from "../crispimage/service6.png";
const Services = () => {
  return (
    <section className="services container-full p-6">
      <div className="content-65">
        <div className="border-full-header">
          <h4 class="primary-text">CRIISP FOR CAPITAL RAISING</h4>
        </div>
        <div className="sub-description">
          <p class="text-small ">
            <strong>Raising Capital?</strong> Discover CRIISP's powerful and
            intuitive features enabling the opportunity of your capital raising
            ambitions
          </p>
        </div>
        <ul className="service-list">
          <li className="each-service">
            <img class="logo-nav" src={serviceone} alt="" />
            <h6 class="primary-text">Transaction ready</h6>
            <p class="text-medium">
              Accept investment application forms, Issue, track and store share
              certificates for successful investments.
            </p>
          </li>
          <li className="each-service">
            <img class="logo-nav" src={servicetwo} alt="" />
            <h6 class="primary-text">Investor Tracking</h6>
            <p class="text-medium">
              Track engagement with your deal room and follow up with investor
              leads
            </p>
          </li>
          <li className="each-service">
            <img class="logo-nav" src={servicethree} alt="" />
            <h6 class="primary-text">Instant messaging</h6>
            <p class="text-medium">
              Engage directly with potentials investors by message and Q&A's.
            </p>
          </li>
          <li className="each-service">
            <img class="logo-nav" src={servicefour} alt="" />
            <h6 class="primary-text">Simplified & Secured</h6>
            <p class="text-medium">
              A simplified and secure deal room structure for documentation
            </p>
          </li>
          <li className="each-service">
            <img class="logo-nav" src={servicefive} alt="" />
            <button class="btn btn-block btn-primary-bg">REQUEST A DEMO</button>
            <button class="btn btn-block btn-major-bg">MORE INFO</button>
          </li>
          <li className="each-service">
            <img class="logo-nav" src={servicesix} alt="" />
            <h6 class="primary-text">Collaborative</h6>
            <p class="text-medium">
              Add collaborators to assist you in the setup. Multi-party digital
              signatures
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
