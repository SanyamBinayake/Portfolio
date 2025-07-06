import React, { useState } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/aachal1.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>

      <div className="about-section">
        {/* ✅ Left Side Profile Image */}
        <div className="abt-left">
          <img src={profile_img} alt="profile" />
        </div>

        {/* ✅ Right Side Tabs and Content */}
        <div className="about-right">
          {/* Tabs */}
          <div className="about-tabs">
            <button
              className={activeTab === "about" ? "active" : ""}
              onClick={() => setActiveTab("about")}
            >
              About Me
            </button>
            <button
              className={activeTab === "skills" ? "active" : ""}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
            <button
              className={activeTab === "achievements" ? "active" : ""}
              onClick={() => setActiveTab("achievements")}
            >
              Achievements
            </button>
          </div>

          {/* Content based on active tab */}
          {activeTab === "about" && (
            <div className="about-para">
              <p>Hello! I'm Aachal Patani, a passionate and creative developer...</p>
              <p>I specialize in building responsive web interfaces using HTML, CSS, JavaScript, and React...</p>
              <p>I am a proud finalist of Smart India Hackathon (SIH) 2024...</p>
              <p>One of my projects was selected among the Top 20 in Tech Pragyan...</p>
              <p>I actively participate in hackathons, love building impactful projects...</p>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p> <hr style={{ width: "85%" }} />
                <p>JavaScript</p> <hr style={{ width: "75%" }} />
                <p>React.js</p> <hr style={{ width: "70%" }} />
                <p>Android App Dev</p> <hr style={{ width: "80%" }} />
                <p>Machine Learning</p> <hr style={{ width: "65%" }} />
                <p>Python</p> <hr style={{ width: "70%" }} />
                <p>Blockchain</p> <hr style={{ width: "60%" }} />
                <p>AWS</p> <hr style={{ width: "60%" }} />
                <p>DBMS & SQL</p> <hr style={{ width: "75%" }} />
                <p>Git & GitHub</p> <hr style={{ width: "80%" }} />
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="about-achivements">
              <div className="about-achivement">
                <h1>Event Leader – Teachers’ Day</h1>
                <p>Led the full event, managed flow & performances.</p>
                <h1>Guest Speaker – MET</h1>
                <p>Shared hackathon experience to inspire students.</p>
                <h1>IPR Contributor – KKWIEER</h1>
                <p>Filed and processed IPRs, learned patent procedures.</p>
                <h1>Announcer – Equinox</h1>
                <p>Anchored the event with clarity and energy.</p>
                <h1>Hackathon Committee Member</h1>
                <p>Managed logistics and onboarding at Innov-Era.</p>
                <h1>AWS Cloud Certified</h1>
                <p>Certified in deploying scalable cloud solutions.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
