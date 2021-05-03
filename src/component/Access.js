import React from "react";
import crispmobile from "../crispimage/crispmobile.png";
import trustone from "../crispimage/trust1.jpg";
import trusttwo from "../crispimage/trust2.jpg";
import trustthree from "../crispimage/trust3.jpg";
import trustfour from "../crispimage/trust4.jpg";
import trustfive from "../crispimage/trust5.jpg";
import trustsix from "../crispimage/trust6.jpg";

const Access = () => {
  return (
    <section className="Access container-full p-6">
      <div className="content-65">
        <div className="row">
          <div className="col-50 mobile-section">
            <img src={crispmobile} alt="" />
          </div>
          <div className="col-50 access-desc">
            <div className="border-full-header">
              <h4 className="primary-text">ACCESS OVER</h4>
              <h4 className="primary-text">30,000 INVESTORS</h4>
            </div>
            <p>
              &nbsp; &nbsp; In partnership with Wholesale Investor, you can
              access ASEAN’s leading network of HNW investors (Professional and
              International) seeking venture opportunities, with a 12 year track
              record of delivering successful introductions.
            </p>
          </div>
        </div>
      </div>
      <div className="content-65 trusters">
        <h3 className="primary-text">TRUSTED & ENGAGED BY</h3>
        <p className="bold primary-text">
          Leading Venture Companies, Universities, Governments, Exchange Listed
          Companies and Funds
        </p>
        <div className="companies">
          <img src={trustone} className="logo-nav" alt="" />
          <img src={trusttwo} className="logo-nav" alt="" />
          <img src={trustthree} className="logo-nav" alt="" />
          <img src={trustfour} className="logo-nav" alt="" />
          <img src={trustfive} className="logo-nav" alt="" />
          <img src={trustsix} className="logo-nav" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Access;
