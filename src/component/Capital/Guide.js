import React from "react";
import frame from "../../crispimage/frame.webp";
const Guide = () => {
  return (
    <section className="guide-banner container-full p-6">
      <div className="content-65 banner-content">
        <div className="header border-full-header">
          <h2 class="thin minor-text">RAISE CAPITAL WITH</h2>
          <h2 class="bold light-text">INTELLIGENCE GUIDING YOU</h2>
        </div>
        <div className="row">
          <div class="col-50 banner-body">
            <p class="ls-1 light-text">
              What if you could have visibility over who is likely to contribute
              to future rounds ?
            </p>
            <h5>This is the power of CRIISP™</h5>
            <div className="button-group text-center">
              <button className="btn btn-inline btn-light">
                REQUEST A DEMO
              </button>
            </div>
          </div>
          <div className="col-50 banner-body text-right">
            <img src={frame} class="phone" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
