import React from "react";

function contact() {
  return (
    <div className="contact">
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Second Name" />
        <input type="textarea" placeholder="message" />
      </form>
      <button> Enter </button>
    </div>
  );
}

export default contact;
