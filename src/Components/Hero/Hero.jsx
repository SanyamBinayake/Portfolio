import React from 'react';
import profile_img from '../../assets/aachal2.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Aachal" />

      <h1><span>I am Aachal Patani,</span> Developer Based in India</h1>

      <p>
        I’m a passionate Frontend and Android Developer with a growing expertise in Machine Learning. 
        I love building visually appealing, responsive web and mobile applications, and I enjoy 
        exploring intelligent solutions using data and algorithms. Always curious and learning, I aim 
        to create meaningful tech that makes a difference.
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
