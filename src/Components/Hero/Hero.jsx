import React from "react";
import profile_img from "../../assets/Sanyam_Binayake.jpg"; // put your photo here (src/assets/)
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Sanyam" />

      <h1>
        <span>I am Sanyam Binayake,</span> a Full-Stack Developer
      </h1>

      <p>
        Aspiring Full-Stack Developer skilled in Java, Spring Boot, React, MySQL, and MongoDB.
        I build scalable web applications, design REST APIs, and work on real-time communication solutions.
      </p>

      <div className="hero-action">
        <AnchorLink href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <a href="src\assets\Sanyam_Binayake_Resume_Updated.pdf" target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
};
export default Hero;