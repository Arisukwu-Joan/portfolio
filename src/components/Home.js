import React from "react";
import img1 from "../images/img1.png";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";

function Home() {
  // const handleClick(){}

  return (
    <main className="main-home">
      <div className="home">
        <h1 className="intro">My Portfolio</h1>
        <h2 className="sub-intro"> Arisukwu Joan</h2>
        <p className="info">
          Frontend Developer with mid-level of Experience in web designing and
          development. Producting the quality work.
        </p>
        <button className="home-button">Hire me</button>
        <div className="home-icon">
          <a href="https://github.com/Arisukwu-Joan">
            <img src={github} alt="" className="icon" />
          </a>
          <a href="https://instagram.com/Arisukwu-Joan">
            <img src={instagram} alt="" className="icon" />
          </a>
          <a href="https://linkedin.com/Arisukwu-Joan">
            <img src={linkedin} alt="" className="icon" />
          </a>
        </div>
      </div>

      <div className="home-img">
        <img src={img1} alt="" className="home--image" />
      </div>
    </main>
  );
}

export default Home;
