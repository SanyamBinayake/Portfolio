import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import myworkdata from '../../assets/mywork_data.js';
import './MyWork.css';
import arrowicon from '../../assets/arrow_icon.svg';
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="mywork-container">
  {myworkdata.map((work, index) => (
    <a
      key={index}
      href={work.w_link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={work.w_img} alt={`Work ${index + 1}`} />
    </a>
  ))}
</div>


        <div className="mywork-showmore">
          <p>Show More</p>
        <img src={arrowicon} alt="arrowicon" />
        </div>

    </div>
  );
};

export default MyWork;
