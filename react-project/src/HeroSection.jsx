import React from 'react';
import './HeroSection.css';
import profileImage from './boo2.png'; // Corrected image path
import Image1 from './boo1.jpg'; // Corrected image path

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id='home'>
      <div className="hero-section">
        <div className="hero-content">
          <h1><span id='h'>Hello, I'm </span><br /><span id='hh'>Boopathi C</span></h1>
          <h2>Designer &<br /> Developer</h2>
          <p>
            <span>Designing pixels and coding dreams into digital reality!</span><br />
            Let's make the web a more beautiful and functional place,<br /> one line of code at a time.
          </p>
          <div className="buttons">
            <button className="hire-me">Hire Me</button>
            <button className="download-resume">Download Resume</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Profile" />
          <div id='circle'></div>
        </div>
        <div className="experience-stats">
          <div className="stat">
            <h3>2+</h3>
            <p>Years Of Experience</p>
          </div>
          <div className="stat">
            <h3>30+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
      </section>





      <section id="about">
  <div class="about">
    <div class="about-header">
      <h3>About me</h3>
      <h2>Professional Design and <br></br>Development Solutions for Your <br></br>Digital Challenges</h2>
      <p>Enter the digital realm with confidence, guided by your trusted Web Wizard.<br></br> Drawing on expertise and innovation, I specialize in crafting solutions that <br></br>distinguish your online presence. Let's build trust and embark on a professional<br></br> digital journey together!</p>
    </div>
    <div class="about-content">
      <div class="about-box">
      <ul class="flex-container">
    <li class="tick-item"> Branding & Design</li>
    <li class="tick-item"> Digital Marketing</li>
    <li class="tick-item"> Web Development</li>
    <li class="tick-item"> Product Designing</li>
</ul>

        <div class="contact-info">
          <p>Email Us: <a href="mailto:cboopathipnr@gmail.com">cboopathipnr@gmail.com</a></p>
          <p>Make A Call: <a href="tel:+919025550735">+91 90255 50735</a></p>
        </div>
      </div>
      <div class="about-img">
        <div class="external-links">
          <a href="https://github.com" class="github-link">View Projects on GitHub</a>
          <a href="https://linkedin.com" class="linkedin-link">Visit on LinkedIn</a>
        </div>
      <img src={Image1} alt="Profile" />

      </div>
    </div>
  </div>
</section>



 <section id="skills" >
  <div className="skills-section">
  <div className="skills-container">
    <div className="skills-header">
      <h3>My Skills</h3>
      <h2>
        Let’s Explore my <span className="highlight">Skills</span> &{' '}
        <span className="highlight">Experience</span>
      </h2>
      <p>
        Welcome to my skills showcase! I specialize in crafting visually stunning websites, mastering in front-end development.
        With expertise in UI/UX design, HTML/CSS, JavaScript, and CMS development, I bring your digital visions to life
        with seamless functionality and engaging user experiences.
      </p>
      <a href="#learn-more" className="learn-more-btn">
        Learn More <span>&rarr;</span>
      </a>
    </div>

    <div className="skills-grid">
      <div className="skill-card">
        <div className="skill-content">
          <h3>Figma</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '95%' }}></div>
          </div>
          <span>95%</span>
        </div>
      </div>
      <div className="skill-card">
        <div className="skill-content">
          <h3>React JS</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '83%' }}></div>
          </div>
          <span>83%</span>
        </div>
      </div>
      <div className="skill-card">
        <div className="skill-content">
          <h3>Photoshop</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '93%' }}></div>
          </div>
          <span>93%</span>
        </div>
      </div>
      <div className="skill-card">
        <div className="skill-content">
          <h3>Illustrator</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '88%' }}></div>
          </div>
          <span>88%</span>
        </div>
      </div>
      <div className="skill-card">
        <div className="skill-content">
          <h3>HTML</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
          <span>90%</span>
        </div>
      </div>
      <div className="skill-card">
        <div className="skill-content">
          <h3>CSS</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
          <span>85%</span>
        </div>
      </div>
      <div className="skill-card">
        <div className="skill-content">
          <h3>JavaScript</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
          <span>80%</span>
        </div>
      </div>
      <div className="skill-card">
        <div className="skill-content">
          <h3>Node.js</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '75%' }}></div>
          </div>
          <span>75%</span>
        </div>
      </div>
      <div className="skill-card">
        <div className="skill-content">
          <h3>Git</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
          <span>90%</span>
        </div>
      </div>
      <div className="skill-card">
        <div className="skill-content">
          <h3>Webpack</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
          <span>70%</span>
        </div>
      </div>
      {/* Add more skill cards as necessary */}
    </div>
  </div>
  </div>
</section>










    </div>
  );
};

export default Home;
