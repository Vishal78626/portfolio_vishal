import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import vishal_img from "../../assets/vishal.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={vishal_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a full-stack web developer with over two years of experience
              in Core PHP, MySQL, and Laravel, creating dynamic web
              applications.
            </p>
            <p>
              I also have 1.5 years of experience with Vue.js and a growing
              interest in React, always eager to expand my skill set.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Laravel</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Vue JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
