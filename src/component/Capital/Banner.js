import React from "react";

const Banner = () => {
  return (
    <div className="container-full capital-banner">
      <div className="content-65 banner-content">
        <div className="header border-header">
          <h2 class="bold minor-text">INTELLIGENT</h2>
          <h1 class="thin light-text">CAPITAL RAISING</h1>
        </div>
        <div className="row">
          <div class="col-100 banner-body">
            <p class="ls-1 light-text">
              CRIISP powered by Wholesale Investor, is an end to end solution,
              which simplifies and streamlines your current or future capital
              raising with powerful tools, analytics and access to ASEAN’s
              ecosystem, with over 30,000 subscribers.
            </p>
            <div className="features">
              <h4 className="feature w-50">INVESTOR ACCESS</h4>
              <h4 className="feature w-100">STREAMLINED PROCESSES</h4>
              <h4 className="feature w-75">DEAL INTELLIGENCE</h4>
              <h4 className="feature w-50">PROVEN EDUCATION</h4>
              <span className="arrow">&#129047;</span>
            </div>

            <div className="button-group">
              <button className="btn btn-inline btn-light">
                REQUEST A DEMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
