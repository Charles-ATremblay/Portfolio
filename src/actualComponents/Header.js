import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, ${(props) => (props.scrolled ? 0.7 : 1)});
  box-shadow: ${(props) =>
        props.scrolled ? '0px 1px 5px rgba(0, 0, 0, 0.1)' : 'none'};
  z-index: 100;
  transition: background-color 0.3s, box-shadow 0.3s, opacity 0.3s;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  cursor: pointer;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #333;
    font-size: 24px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

const NavLink = styled.a`
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
        color: #007bff;
    }
`;


const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const smoothScrollTo = (elementId) => {
        console.log(elementId);
        const element = document.getElementById(elementId);
        console.log(element);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <HeaderWrapper scrolled={scrolled}>
            <Nav>
                <NavList>
                    <NavLink onClick={() => smoothScrollTo('hero')}>Home</NavLink>
                    <NavLink onClick={() => smoothScrollTo('about')}>About Me</NavLink>
                    <NavLink onClick={() => smoothScrollTo('projects')}>Projects</NavLink>
                    <NavLink onClick={() => smoothScrollTo('contact')}>Contact Me</NavLink>
                </NavList>
                <SocialIcons>
                    <a href="mailto:charlesantoine.t@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope />
                    </a>
                    <a href="https://www.linkedin.com/in/charles-antoine-tremblay-6557b8187/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Charles-ATremblay" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </SocialIcons>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;
