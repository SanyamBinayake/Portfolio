import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import './Contact.css';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "c1fead06-1b2b-40bc-a242-229af6f3fe94");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-sec">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I’m always open to discussing new projects, collaboration opportunities, internships, or freelance work. Feel free to reach out — I’d love to connect!</p>

          <div className="contact-detailes">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>spbinayake25@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>+91 7499668872</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Nashik, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label>Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your Email' name='email' required />
          <label>Your Message</label>
          <textarea name="message" rows="8" placeholder='Enter Your Message' required></textarea>
          <button className="contact-submit" type='submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
