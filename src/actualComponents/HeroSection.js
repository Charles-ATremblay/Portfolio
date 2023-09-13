import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define a keyframe for the fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroWrapper = styled.section`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
  padding: 100px 0;
  text-align: center;
  background: linear-gradient(to bottom, #007bff, #0056b3);
  color: #fff;
  height: 60vh;
  animation: ${fadeIn} 1s ease-in; 
`;

const HeroHeader = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Tagline = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
`;

const CTAButton = styled.button`
  font-size: 18px;
  padding: 15px 30px;
  background-color: #fff;
  color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;


const handleExploreWork = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
};

const HeroSection = ({ id }) => {
  return (
    <HeroWrapper id={id}>
      <HeroHeader>Hi! I'm Charles</HeroHeader>
      <Tagline>Welcome to My Portfolio</Tagline>
      <CTAButton onClick={handleExploreWork}>Explore My Work</CTAButton>
    </HeroWrapper>
  );
};

export default HeroSection;
