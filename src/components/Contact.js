import React from "react";

function contact() {
  return (
    <div className="contact-form">
      <div className="monials">
        <h1 className="service-header">
          Get in Touch
          <br></br>
          <span className="break"> Contact me</span>
        </h1>
      </div>
      <form className="c-right">
        <input type="text" placeholder="Name" className="user" />
        <input type="email" placeholder="Email" className="user" />
        <textarea type="textarea" placeholder="message" className="user" />
        <input type="submit" value="Send" className=" form-button" />
      </form>
    </div>
  );
}

export default contact;
