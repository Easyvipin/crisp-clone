import React from "react";
import stream from "../../crispimage/stream.png";
const Description = () => {
  return (
    <section className="description container-full p-6">
      <div className="content-65">
        <div className="row">
          <div className="desc-img col-50">
            <img src={stream} alt="" />
          </div>
          <div className="desc-data col-50">
            <div className="border-full-header ">
              <h4 className="thin text-right">YOUR STREAMLINED</h4>
              <h4 className="bold text-right">END TO END SOLUTION</h4>
            </div>
            <p>
              YOUR STREAMLINED END TO END SOLUTION Invite your own potential
              investors, find new investors, track engagement and progress,
              utilise transaction-ready rooms, capital raising tools, intuitive
              analytics, in-app communications, digital signatures, facilitate
              online investment all from CRIISP™.
            </p>
            <p>
              We have thought through every component, then streamlined,
              visualised and simplified it. You have a business to build and our
              role is to provide the software, intelligence, processes and
              education to assist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
