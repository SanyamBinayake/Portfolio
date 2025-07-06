import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import myworkdata from '../../assets/myachivements.js';
import './MyAchivements.css';
import arrowicon from '../../assets/arrow_icon.svg';

const MyAchivements = () => {
  return (
    <div id='gallery' className="achievements-section">
      <div className="achievements-title">
        <h1>My Achievements</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="achievements-gallery">
        {myworkdata.map((work, index) => (
          <div className={`gallery-item size-${(index % 4) + 1}`} key={index}>
            <img src={work.w_img} alt={`Achievement ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="achievements-showmore" onClick={() => alert("Coming soon!")}>
        <p>Show More</p>
        <img src={arrowicon} alt="arrow" />
      </div>
    </div>
  );
};

export default MyAchivements;
