import React from 'react';
import '../Experience.css';


const experienceData = [
  {
    company: 'Tekion Corp',
    role: 'Implementation Specialist',
    duration: 'Mar 2022 - Present · 1 year 7 months',
    location: 'United States, Canada · Hybrid',
    description: 'Dual role of assisting in the project management and setup of the Tekion ARC system. Advising, training, and supporting the end user for automotive dealership ROI.',
    skills: ['Training', 'Accounting'],
    products: ['Automotive Retail Cloud (ARC)', 'Auto Dealer Software']
  },
  {
    company: 'Bartholomew Development',
    role: 'Owner',
    duration: 'March 2020 - Present · 3 years 7 months',
    location: 'Ohio, United States',
    description: 'Ownership and management of Bartholomew Development. Involved in the redesign and maintenance of various websites, as well as compilation and publication of poetry books.',
    projects: [
      'www.frenchartcolony.org',
      'www.homecomingranch.com',
      'The Dream Dreaming You: Reflective Poetry, by Jay Sharp',
      'www.influenceonpurpose.com',
      'www.hollowlogstudios.com'
    ],
    skills: ['HTML5', 'CSS', 'JavaScript', 'React.js', 'MongoDB']
  },
  // ...other experiences
  {
    company: 'Hollow Log Studios',
    role: 'Chief Technology Officer',
    duration: 'March 2020 - Present · 3 years 7 months',
    location: 'Ohio, United States',
    description: 'In charge of technology and marketing for muralist and watercolorist.',
    skills: ['HTML5', 'CSS', 'Bootstrap', 'JavaScript', 'React.js', 'React Native', 'MongoDB', 'Wix Website Builder', 'Adobe Premiere Pro']
  },
  {
    company: 'Cox Automotive Inc.',
    role: 'Dealer Solutions Consultant II',
    duration: 'May 2021 - March 2022 · 11 months',
    location: 'Draper, Utah, United States',
    description: 'Focused on project management, training, implementation, and setup of Accounting (General Ledger) departments within auto dealerships. Specialized in handling more difficult implementations like Buy/Sells, Independents, DMS copies, and Special Projects.',
    travelInfo: 'Travel for On-Site Implementations: 80%, Remote Virtual Implementations: 20%',
    skills: ['Accounting', 'Project Management', 'Training']
  },
  {
    company: 'Fluke Corporation',
    role: 'Software Implementation Specialist',
    duration: 'December 2017 - July 2019 · 1 year 8 months',
    location: 'Bonita Springs, Florida, United States',
    description: 'Assisted new customers with the entire process of software implementation, including customization and onboarding. Conducted both remote and on-site trainings.',
    additionalDetails: [
      'Revamped standard operating procedures for the department.',
      'Created a full custom user documentation for a client.'
    ],
    skills: ['Project Management', 'Software Implementation', 'Customer Training']
  },
  {
    company: 'CDK Global',
    role: 'Implementation Specialist (General Ledger/Accounting)',
    duration: 'September 2019 - January 2020 · 5 months',
    location: 'Salt Lake City, Utah, United States',
    description: 'Handled the implementation of the General Ledger and Accounting modules for CDK Global’s dealership management software.',
    skills: ['General Ledger', 'Accounting', 'Software Implementation']
  },
  {
    company: 'FCA Fiat Chrysler Automobiles',
    role: 'Warranty and Recall Support Manager',
    duration: 'July 2017 - December 2017 · 6 months',
    location: 'Fort Myers, Florida, United States',
    description: 'Led a team of 20-30 employees handling Warranty and Recall items for FCA OEMs (Fiat, Chrysler, Jeep, Dodge, Ram).',
    skills: ['Team Leadership', 'Warranty Support', 'Recall Management']
  }

];



const Experience = () => {
  return (
    <div className="container">
      <h1>Experience</h1>
      <div className="experience-section">
        {experienceData.map((exp, index) => (
          <div className="experience-entry" key={index}>
            <h2>{exp.role} at {exp.company}</h2>
            <p>{exp.duration}</p>
            <p>{exp.location}</p>
            <p>{exp.description}</p>
            {exp.projects && <p>Projects: {exp.projects.join(', ')}</p>}
            {exp.travelInfo && <p>{exp.travelInfo}</p>}
            {exp.additionalDetails && <p>Additional Details: {exp.additionalDetails.join('. ')}</p>}
            <div>
              Skills: {exp.skills.map((skill, i) => <span className="skills" key={i}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Experience;

