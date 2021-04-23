import React from "react";
import phone from "../crispimage/bannerphone.png";
const Banner = () => {
  return (
    <section className="container-full banner">
      <div className="content-65 banner-content">
        <div className="header border-header">
          <h2 class="thin minor-text">YOUR CAPITAL RASING</h2>
          <h1 class="bold light-text">SIMPLIFIED AND AMPLIFIED</h1>
        </div>
        <div className="row">
          <div class="col-50 banner-body">
            <p class="ls-1 light-text">
              CRIISP powered by Wholesale Investor, is an end to end solution,
              which simplifies and streamlines your current or future capital
              raising with powerful tools, analytics and access to ASEAN’s
              ecosystem, with over 30,000 subscribers.
            </p>
            <div className="button-group">
              <button className="btn btn-inline btn-light">
                REQUEST A DEMO
              </button>
              <button className="btn btn-inline btn-primary">SEE MORE</button>
            </div>
          </div>
          <div className="col-50 banner-body text-right">
            <img src={phone} class="phone" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
