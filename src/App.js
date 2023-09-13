import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Import useNavigate

import Header from './actualComponents/Header';
import HeroSection from './actualComponents/HeroSection';
import AboutMeSection from './actualComponents/AboutMeSection';
import ProjectsSection from './actualComponents/ProjectsSection';
import ContactForm from './actualComponents/ContactSection';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const App = () => {
  

  return (
    <Router>
      <AppContainer>
        <Header />
        <HeroSection id="hero" />
        <AboutMeSection id="about" />
        <ProjectsSection id="projects" />
        <ContactForm id="contact" />

      </AppContainer>
    </Router>
  );
}

export default App;