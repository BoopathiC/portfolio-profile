import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Optional: Importing icons

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State for mobile menu
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleNavigation = (section) => {
    // If section starts with '#', scroll to that section in the current page
    if (section.startsWith('#')) {
      document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
    } else {
      // Otherwise, navigate to a different route
      if (section === 'home') {
        navigate('/'); // Navigate to the home route
      } else {
        navigate(`/${section}`); // Navigate to other routes
      }
    }
    setIsMobile(false); // Close the mobile menu after navigation
  };

  return (
    <nav className="navbar">
      <div className="logo">Boopathi's Design Den</div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
        <li onClick={() => handleNavigation('#home')}>Home</li>
        <li onClick={() => handleNavigation('#about')}>About</li>
        <li onClick={() => handleNavigation('#skills')}>Skills</li>
        <li onClick={() => handleNavigation('projects')}>Projects</li>
        <li onClick={() => handleNavigation('blog')}>Blog</li>
        <li onClick={() => handleNavigation('github')}>Github</li>
      </ul>
      {isMobile && (
        <div className="overlay">
          <FaTimes className="cancel-icon" onClick={toggleMenu} />
          <ul className="full-screen-nav">
            <li onClick={() => handleNavigation('#home')}>Home</li>
            <li onClick={() => handleNavigation('#about')}>About</li>
            <li onClick={() => handleNavigation('#skills')}>Skills</li>
            <li onClick={() => handleNavigation('projects')}>Projects</li>
            <li onClick={() => handleNavigation('blog')}>Timeline</li>
            <li onClick={() => handleNavigation('github')}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
