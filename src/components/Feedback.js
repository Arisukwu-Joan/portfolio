import React, { useEffect, useState } from "react";
import Gallery from "../Gallery";

function Feedback() {
  const [imgGallery, setImgGallery] = useState({
    randomImage: "",
  });

  useEffect(() => {
    const element = Gallery.data.monial;
    const randomNumber = Math.floor(Math.random() * element.length);
    const url = element[randomNumber].url;
    setImgGallery({ randomImage: url });
  }, []);

  function handleClick() {
    const element = Gallery.data.monial;
    const randomNumber = Math.floor(Math.random() * element.length);
    const url = element[randomNumber].url;
    setImgGallery({ randomImage: url });
  }

  return (
    <div className="feedback">
      <div className="monials">
        <h1 className="service-header">
          Our Clients are
          <span className="break"> Satisfied</span>
        </h1>
        <p className="service-para">
          lorem Oftentimes, when you want to use a web font on your website or
          application, you know in advance which letters you'll need. This often
          occurs when you're using a web font in a logo or heading.
        </p>
      </div>
      <div className="monials-img">
        <div className="gallery">
          <img src={imgGallery.randomImage} alt="" className="fb-img" />
        </div>
        <button className="fb-button" onClick={handleClick}>
          Reviews
        </button>
      </div>
    </div>
  );
}

export default Feedback;
