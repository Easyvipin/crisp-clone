import React from "react";
import featureone from "../crispimage/feature1.png";
import featuretwo from "../crispimage/feature2.png";
import featurethree from "../crispimage/feature3.png";
import featurefour from "../crispimage/feature4.png";
import tiltview from "../crispimage/tiltview.png";

const Feature = () => {
  return (
    <section class="feature p-6 container-full bg-primary">
      <div className="content-65">
        <h6 class="light-text">As feature in</h6>
        <div className="companies">
          <img src={featureone} class="logo-nav" alt="" />
          <img src={featuretwo} class="logo-nav" alt="" />
          <img src={featurethree} class="logo-nav" alt="" />
          <img src={featurefour} class="logo-nav" alt="" />
          <img src={featureone} class="logo-nav" alt="" />
          <img src={featuretwo} class="logo-nav" alt="" />
          <img src={featurethree} class="logo-nav" alt="" />
          <img src={featurefour} class="logo-nav" alt="" />
        </div>
        <div className="mobile-view">
          <img src={tiltview} class="tiltview" alt="" />
          <iframe
            width="490"
            height="264"
            src="https://www.youtube.com/embed/G5z_pU1Mq9U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Feature;
