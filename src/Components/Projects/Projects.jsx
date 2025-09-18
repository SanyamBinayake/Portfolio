import React from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import projects from '../../assets/mywork_data';

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <a key={i} className="project-card" href={p.w_link} target="_blank" rel="noopener noreferrer">
            <img src={p.w_img} alt={p.w_name} />
            <div className="project-info">
              <h3>{p.w_name}</h3>
              <p>{p.w_desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
