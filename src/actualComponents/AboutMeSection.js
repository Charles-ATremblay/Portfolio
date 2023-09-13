import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.section`
  font-family: 'Raleway', sans-serif;
  padding: 80px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutMeHeader = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const AboutMe = styled.div`
  display: flex;
  align-items: flex-start; 
  flex-direction: column; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  background-color: #fff;
`;

const AboutMeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 20px;
  text-align: left;
`;

const ProfileImage = styled.img`
  max-width: 30%;
  height: auto;
  border-radius: 50%;
  margin-right: 20px; 
`;

const AboutMeText = styled.div`
  flex: 1; /* Take remaining width */
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  text-align: left;
`;

const SkillItem = styled.div`
  font-size: 16px;
  padding: 10px 20px;
  margin-bottom: 10px;
  margin: 0 10px 10px 10px;
  background-color: ${(props) => props.backgroundColor || '#333'};
  color: white;
  border-radius: 5px;
  
`;

const SkillsContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const AboutMeSection = ({ id }) => {
  return (
    <AboutMeWrapper id={id}>
      <AboutMeHeader>About Me</AboutMeHeader>
      <AboutMe>
        <AboutMeContent>
          <ProfileImage src="/images/profile_pic.jpg" alt="Charles-Antoine Tremblay" />
          <AboutMeText>
            <Paragraph>
              My name is Charles-Antoine Tremblay, and I am a student at the University of Montreal. I am currently in my third year of my Bachelor of Computer Science. I am passionate about programming and I am always looking to learn new things.
            </Paragraph>
            <Paragraph>
              My main interests are web development, mobile development, and artificial intelligence. I am currently working on a project that will allow me to learn more about these fields. I am also looking for a full-time job as soon as possible! 
            </Paragraph>
            <Paragraph>
            Outside of my time developing, I enjoy playing hockey, video games such as League of Legends and Hearthstone: Battlegrounds, and taking care of my little aquarium. In the winter, I love to ski and to play hockey outside, though I will also partake in the occasional snowball fight ;). As for the summer, I spend most of my free time either finding new places in the city or at my chalet where I can fish, ride an All-Terrain Vehicle, or just walk through the forest.
            </Paragraph>
          </AboutMeText>
        </AboutMeContent>
        <SkillsContainer>
          <Paragraph>
            Now, unto the more technical stuff! I have been programming for about 5 years now, and I have learned a lot of different languages and frameworks. I am always looking to learn new things and I am not afraid to try new things.
          </Paragraph>
          <SkillsList>
            <SkillItem backgroundColor="#007bff">JavaScript</SkillItem>
            <SkillItem backgroundColor="#6f42c1">HTML</SkillItem>
            <SkillItem backgroundColor="#007bff">CSS</SkillItem>
            <SkillItem backgroundColor="#6f42c1">React</SkillItem>
            <SkillItem backgroundColor="#007bff">Express.js</SkillItem>
            <SkillItem backgroundColor="#6f42c1">Node.js</SkillItem>
          </SkillsList>
          <p>And many more!</p>
        </SkillsContainer>
      </AboutMe>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
