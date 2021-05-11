import React from "react";
import crispmobile from "../../crispimage/borad.png";
import advisor from "../../crispimage/advisor.png";
const Collaborate = () => {
  return (
    <section className="description container-full p-6">
      <div className="content-65">
        <div className="row">
          <div className="desc-img col-50">
            <img className="crispmobile" src={crispmobile} alt="" />
            <img className="advisor" src={advisor} alt="" />
          </div>
          <div className="desc-data col-50">
            <div className="border-full-header ">
              <h4 className="thin text-right">COLLABORATE WITH</h4>
              <h4 className="bold text-right">ADVISORS AND YOUR BOARD</h4>
            </div>
            <p>
              COLLABORATE WITH ADVISORS AND YOUR BOARD CRIISP™. is designed to
              enable the process for your advisory team and assist them in
              raising more capital in less time, along with providing invaluable
              intelligence on your raise and your strategy.
            </p>
            <p>
              By collaborating with your team, they will be empowered to assist
              you during your capital raising process efficiently and
              effectively.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-50 know-more p-6">
            <h4 className="primary-text">
              Want to know more? <br />
              Let us show you
            </h4>
            <span>&#129047;</span>
            <button className="btn btn-primary-bg">REQUEST A DEMO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
