import React from "react";
import Idprovider from "./Idprovider";

const Signin = () => {
  return (
    <>
      <section className="signin ">
        <h6 class="thin light-text text-center">Sign in with CRIISP Account</h6>
        <form action="">
          <div className="input-group">
            <i className="fas fa-envelope-square"></i>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <i className="fas fa-key"></i>
            <input type="text" placeholder="Enter your Password" />
          </div>
          <button className="btn-block  btn  btn-primary  mt-4">Sign in</button>
        </form>
      </section>
      <Idprovider />
    </>
  );
};

export default Signin;
