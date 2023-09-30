import React from 'react';
import '../Header.css';

const Header = () => {
  return (
    <header>
      <h1>Joey Bartholomew</h1>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
