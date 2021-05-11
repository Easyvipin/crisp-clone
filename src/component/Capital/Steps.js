import React from "react";
import step from "../../crispimage/camp.webp";
import trustone from "../../crispimage/trust1.jpg";
import trusttwo from "../../crispimage/trust2.jpg";
import trustthree from "../../crispimage/trust3.jpg";
import trustfour from "../../crispimage/trust4.jpg";
import trustfive from "../../crispimage/trust5.jpg";
import trustsix from "../../crispimage/trust6.jpg";

const Steps = () => {
  return (
    <div className="steps container-full p-6">
      <div className="content-65">
        <div className="row">
          <div className="col-75">
            <ul className="step-list">
              <li className="each-step">
                <span>1.</span>
                <div>
                  <h6 className="bold">SET-UP AND LAUNCH</h6>
                  <h6 className="thin">YOUR CAMPAIGN</h6>
                </div>
              </li>
              <li className="each-step">
                <span>2.</span>
                <div>
                  <h6 className="bold">PROMOTE AND ACCESS</h6>
                  <h6 className="thin">OVER 30,000 INVESTORS</h6>
                </div>
              </li>
              <li className="each-step">
                <span>3.</span>
                <div>
                  <h6 className="bold">MANAGE YOUR CAPITAL RAISING</h6>
                  <h6 className="thin">WITH INTUITIVE ANALYTIVS</h6>
                </div>
              </li>
              <li className="each-step">
                <span>4.</span>
                <div>
                  <h6 className="bold">SET-UP AND LAUNCH</h6>
                  <h6 className="thin">YOUR CAMPAIGN</h6>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-25">
            <div className="step-img">
              <img src={step} alt="" />
            </div>
          </div>
        </div>
        <div className="row trusters p-4">
          <h6 className="bold primary-text text-center">
            CRIISP and our Parent Wholesale Investor’s Clients Include:
          </h6>
          <div className="companies">
            <img src={trustone} className="logo-nav" alt="" />
            <img src={trusttwo} className="logo-nav" alt="" />
            <img src={trustthree} className="logo-nav" alt="" />
            <img src={trustfour} className="logo-nav" alt="" />
            <img src={trustfive} className="logo-nav" alt="" />
            <img src={trustsix} className="logo-nav" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
