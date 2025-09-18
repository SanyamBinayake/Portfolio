import React from "react";
import footerlogo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footerlogo} alt="Sanyam Logo" />
          <p>
            Crafted with passion by <strong>Sanyam Binayake</strong>. I build
            fast, functional, and user-focused digital experiences — from
            responsive websites to real-time systems. Let’s create something
            impactful together.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-contact">
            <a href="mailto:spbinayake25@gmail.com" className="footer-link">
              📧 spbinayake25@gmail.com
            </a>
            <a href="tel:+917499668872" className="footer-link">
              📞 +91 7499668872
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © {new Date().getFullYear()} Sanyam Binayake. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
