import React, { useState } from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import myworkdata from '../../assets/myachivements.js';
import './MyAchivements.css';
import arrowicon from '../../assets/arrow_icon.svg';

const MyAchivements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div id='gallery' className="achievements-section">
      <div className="achievements-title">
        <h1>My Achievements</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="achievements-gallery">
        {myworkdata.map((work, index) => (
          <div
            className={`gallery-item size-${(index % 4) + 1}`}
            key={index}
            onClick={() => handleImageClick(work.w_img)}
          >
            <img src={work.w_img} alt={`Achievement ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="achievements-showmore" onClick={() => alert("More achievements coming soon!")}>
        <p>Show More</p>
        <img src={arrowicon} alt="arrow" />
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="achievement-popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Achievement" className="popup-img" />
            <button className="popup-close" onClick={closePopup}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAchivements;
