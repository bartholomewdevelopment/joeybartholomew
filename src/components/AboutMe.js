import React from 'react';
import '../styles.css'; // Assuming you will have a separate CSS file for styling

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="career-section">
        <h3>Foundational Career: Tech Support & Customer Service</h3>
        <p>
          From age 20 to 33, I built a solid foundation in tech support and customer service. 
          I mastered the art of troubleshooting, communication, and delivering excellent 
          customer experiences.
        </p>
      </div>
      <div className="career-section">
        <h3>Software Implementation Roles</h3>
        <ul>
          <li>
            <strong>Fluke:</strong> Worked on maintenance management software.
          </li>
          <li>
            <strong>Dealertrack:</strong> Specialized in automotive dealer management software (DMS).
          </li>
          <li>
            <strong>Tekion:</strong> Currently serving as an implementation specialist on another DMS.
          </li>
        </ul>
      </div>
      <div className="career-section">
        <h3>Bartholomew Development LLC</h3>
        <p>
          I've started Bartholomew Development LLC with a focus on helping clients improve their 
          websites. I'm also building a signature web application called Overtime Athletic Management.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
