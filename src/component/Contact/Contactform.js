import React from "react";

const Contactform = () => {
  return (
    <form className="col-50">
      <div class="form-inline-group">
        <input type="text" placeholder="First Name" className="text" />
        <input type="text" placeholder="Last Name" className="text" />
      </div>
      <div class="form-inline-group">
        <input type="text" placeholder="Email" className="text" />
        <input type="text" placeholder="Phone" className="text" />
      </div>
      <div class="form-inline-group">
        <input type="text" placeholder="Company Name" className="text" />
        <input type="text" placeholder="Country" className="text" />
      </div>
      <div className="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Message/Question(Optional)"
        ></textarea>
      </div>
      <button class="btn btn-light mt-2 ">Get in Touch</button>
    </form>
  );
};

export default Contactform;
