import React from "react";
import Card from "./Card";
import humble from "../images/humble.png";
import heartemoji from "../images/heartemoji.png";
import glasses from "../images/glasses.png";
import Resume from "../Resume.pdf";

function Services(props) {
  return (
    <div className="card-service">
      <div className="service">
        <h1 className="service-header">
          My Awesome
          <span className="break"> Services</span>
        </h1>
        <p className="service-para">
          lorem Oftentimes, when you want to use a web font on your website or
          application, you know in advance which letters you'll need. This often
          occurs when you're using a web font in a logo or heading.
        </p>
        <a href={Resume} download>
          <button className="ser-button">Dowmload</button>
        </a>
      </div>

      <Card
        img={humble}
        deve="Developer"
        para="Html, Css, Bootstrap, Javascript, React, Wordpress"
        learn="LEARN MORE"
      />
      <Card
        img={glasses}
        deve="Design"
        para="Figma, Photoshop, Sketch, Adobe Illustrator, and many more...."
        learn="LEARN MORE"
      />
      <Card
        img={heartemoji}
        deve="Chef"
        para="Lorem ispum dummy text are usually use in section where ..."
        learn="LEARN MORE"
      />
    </div>
  );
}

export default Services;
