import React, { useState } from 'react';
import './Home.css';  
import boo2 from './boo2.png'; // Adjust the path as needed

export const Home = () => {
  const [navActive, setNavActive] = useState(false);

  const handleToggle = () => {
    setNavActive(!navActive);
  };

  const handleLinkClick = () => {
    setNavActive(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1>
            <span className="port">Port</span>
            <span className="folio">folio</span>
          </h1>
        </div>
        <ul className={`nav-items ${navActive ? 'active' : ''}`}>
          <li><a href="#home" onClick={handleLinkClick}><h2>Home</h2></a></li>
          <li><a href="#about-me" onClick={handleLinkClick}><h2>About Me</h2></a></li>
          <li><a href="#timeline" onClick={handleLinkClick}><h2>Timeline</h2></a></li>
          <li><a href="#projects" onClick={handleLinkClick}><h2>Projects</h2></a></li>
          <li><a href="#skills" onClick={handleLinkClick}><h2>Skills</h2></a></li>
          <li><a href="#contact-me" onClick={handleLinkClick}><h2>Contact Me</h2></a></li>
        </ul>
        <button className="nav-toggle" id="navToggle" onClick={handleToggle}>
          &#9776;  {/* Hamburger icon */}
        </button>
      </nav>

      {/* Content Sections */}
      <div id="home" className="content-container">
        <div className="text-content">
          <h1>
            <span id="name1">Hello, I'm </span><br></br>
            <span id="name2">Boopathi C</span><br></br>
            <span id="name3">And I'm a</span><br></br>
            <span id="name4">Web Developer</span>
          </h1>
          <div id='social'>
            <button type='' >DOWNLOAD CV</button>
            
          </div>
        </div>
        <div className="image-content">
          <img src={boo2} alt="Boopathi C" />
        </div>
        <div id='box'>
          <h1 id='box-text1'>2+</h1>
          <h2 id='box-text2'>Years of Experience</h2>
          <h1 id='box-text1'>5+</h1>
          <h2 id='box-text2'>Projects</h2>

        </div>
      </div>

      {/* Other sections */}
      {/* ... */}
    </div>
  );
};
