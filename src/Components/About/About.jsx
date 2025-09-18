import React, { useState } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/Sanyam_Binayake.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>

      <div className="about-section">
        <div className="abt-left">
          <img src={profile_img} alt="profile" />
        </div>

        <div className="about-right">
          <div className="about-tabs">
            <button className={activeTab === "about" ? "active" : ""} onClick={() => setActiveTab("about")}>About Me</button>
            <button className={activeTab === "skills" ? "active" : ""} onClick={() => setActiveTab("skills")}>Skills</button>
            <button className={activeTab === "achievements" ? "active" : ""} onClick={() => setActiveTab("achievements")}>Achievements</button>
          </div>

          {activeTab === "about" && (
            <div className="about-para">
              <p>Hello! I'm <strong>Sanyam Binayake</strong>, an aspiring Full-Stack Developer passionate about building scalable, user-friendly applications.</p>
              <p>I specialize in Spring Boot, React, MySQL, and MongoDB. I design REST APIs and implement real-time systems for communication.</p>
              <p>I enjoy collaborating in teams, participating in hackathons, and learning new technologies to improve my craft.</p>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="about-skills">
              <div className="about-skill">
                <p>Java</p> <hr style={{ width: "85%" }} />
                <p>Spring Boot</p> <hr style={{ width: "80%" }} />
                <p>React.js</p> <hr style={{ width: "75%" }} />
                <p>MySQL</p> <hr style={{ width: "80%" }} />
                <p>MongoDB</p> <hr style={{ width: "65%" }} />
                <p>REST APIs</p> <hr style={{ width: "75%" }} />
                <p>WebSocket / WebRTC</p> <hr style={{ width: "65%" }} />
                <p>HTML, CSS, JS</p> <hr style={{ width: "85%" }} />
                <p>Git & GitHub</p> <hr style={{ width: "80%" }} />
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="about-achievements">
              <h1>Finalist – CODE-A-THON 2024</h1>
              <p>Among the top performers in a state-level hackathon organized by Savali Foundation & Eshwar Foundation.</p>
              <h1>College Website Developer</h1>
              <p>Designed & deployed two official college websites to enhance accessibility for students and faculty.</p>
              <h1>Intern – Sumago Infotech</h1>
              <p>Contributed to responsive web development tasks (HTML, CSS, JS).</p>
              <h1>Strong Academics</h1>
              <p>BTech CSE (CGPA: 9.38/10) at WIT Solapur.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
