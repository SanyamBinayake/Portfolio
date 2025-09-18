import React from "react";
import profile_img from "../../assets/Sanyam_Binayake.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Sanyam" />

      <h1>
        <span>I am Sanyam Binayake,</span> A Full Stack Developer
      </h1>

      <p>
        I’m a passionate Full-Stack Developer with strong skills in Spring Boot,
        React, PHP, and MySQL, and I’m constantly exploring new technologies to
        improve my craft. I love designing and building user-friendly,
        responsive web applications and enjoy solving challenging backend
        problems with clean, efficient code. I’m always curious, eager to learn,
        and motivated to create practical, impactful solutions that make a
        difference.
      </p>

      <div className="hero-action">
        {/* ✅ AnchorLink to #contact */}
        <AnchorLink href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>

        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
