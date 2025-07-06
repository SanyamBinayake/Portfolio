import React from 'react'
import profile_img from '../../assets/aachal2.jpg'
import footerlogo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import './Footer.css'
const Footer=() => {
  return (
    <div className='footer'>
        
    <div className="footer-top">
        <div className="footer-top-left">
  <img src={footerlogo} alt="Aachal Logo" />
  <p>
    Crafted with passion and purpose by Aachal Patani. I build digital experiences that are fast, functional, and user-focused — from responsive websites to intelligent apps. Let’s create something impactful together.
  </p>
</div>

<div className="footer-top-right">
    <div className="footer-email-input">
    <img src={user_icon} alt="" />
    <input type="email" placeholder='Enter Your Email' />
    </div>

    <div className="footer-">Subscribe</div>

</div>

    </div>

    <hr></hr>

    <div className="footer-bottom">
  <p className="footer-bottom-left">© 2025 Aachal Patani. All rights reserved.</p>
  <div className="footer-bottom-right">
    <p>Term of Services</p>
    <p> Pivarcy Policy </p> 
    <p>Connect with me</p>
  </div>
</div>

    </div>
    
  )
}

export default Footer
