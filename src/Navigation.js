import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
  font-size: 18px;
`;

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/" onClick={() => scrollToSection('home-section')}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about-me" onClick={() => scrollToSection('about-me-section')}>
            About Me
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/projects" onClick={() => scrollToSection('projects-section')}>
            Projects
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" onClick={() => scrollToSection('contact-section')}>
            Contact
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
