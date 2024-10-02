import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
// Import other components here

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* Define other routes here */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
