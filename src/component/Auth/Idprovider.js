import React from "react";
import google from "../../crispimage/google.png";
import linke from "../../crispimage/linke.png";
const Idprovider = () => {
  return (
    <section className="signin ">
      <h6 class="thin light-text text-center">Sign in with ID Provider</h6>
      <div class="providers">
        <button class="btn-block btn provider-btn">
          <img src={google} alt="" />
        </button>
        <button class="btn-block btn provider-btn">
          <img src={linke} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Idprovider;
