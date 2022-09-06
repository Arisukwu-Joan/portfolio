import React from "react";
// import humble from "../images/humble.png";

function Card(props) {
  return (
    <div className="main-card">
      <div className="card">
        <img src={props.img} alt=" " className="humble" />
        <h3 className="deve">{props.deve}</h3>
        <p className="para">{props.para}</p>
        <h3 className="learn">{props.learn}</h3>
      </div>
    </div>
  );
}

export default Card;
