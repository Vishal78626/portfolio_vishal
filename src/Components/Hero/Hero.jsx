import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume_link from "../../assets/Vishal_2024.pdf";
import vishal_img from "../../assets/vishal.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={vishal_img} alt="" />
      <h1>
        <span>I'm Vishal,</span> a PHP-based Full-Stack Web Developer.
      </h1>

      <p>
        I am a full-stack web developer with over two years of experience in
        Core PHP, MySQL, and Laravel, complemented by 1.5 years of expertise in
        Vue.js. My work focuses on building dynamic, responsive web
        applications, and I have a foundational understanding of React. I am
        passionate about leveraging my skills to create impactful and efficient
        solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a className="hero-resume" href={resume_link} target="_blank">
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
