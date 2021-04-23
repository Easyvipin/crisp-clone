import React from "react";
const Stats = ({
  percent,
  header,
  subheader,
  desc,
  imgpercent,
  background,
  align,
}) => {
  return (
    <section className={`stats ${background} container-full p-6`}>
      <div className={`content-65 ${align} `}>
        <div className="stat-desc">
          <div className="header-full">
            <h3>{header}</h3>
            <h3 className="bold">{subheader}</h3>
          </div>
          <p>{desc}</p>
        </div>
        <div className="stat-percent">
          <div className="numbers">
            <span>Up to</span>
            <h1>
              {percent} <span className="percent">%</span>
            </h1>
          </div>

          <img src={imgpercent} className="logo-nav" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
