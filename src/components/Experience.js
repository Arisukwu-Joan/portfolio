import React from "react";
import star from "../images/star.png";

function Experience(props) {
  return (
    <div className="experience">
      <div className="moments">
        <div className="circle">{props.duration}</div>
        <div className="rate">
          <img src={star} alt="" className="star" />
          <span> {props.year}</span>
        </div>
        <span className="exp"> {props.exp}</span>
      </div>
    </div>
  );
}

export default Experience;
