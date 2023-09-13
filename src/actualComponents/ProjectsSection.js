import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  padding: 80px 0;
  text-align: center;
  background-color: #f8f8f8;
  font-family: 'Raleway', sans-serif;
`;

const ProjectsHeader = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ProjectItem = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Add transition for the transform property */
  &:hover {
    transform: scale(1.05); /* Scale up by 5% when hovering */
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: #333;
`;

const ProjectPreview = styled.img`
  width: 80%;
  height: auto;
  border-radius: 5px;
`;

const ProjectsSection = ({id}) => {
  return (
    <ProjectsWrapper id={id}>
      <ProjectsHeader>My Projects</ProjectsHeader>
      <ProjectItem>
        <ProjectTitle>CocktailHub</ProjectTitle>
        <ProjectPreview src="\images\Projet-final.png" alt="CocktailHub" />
        <ProjectDescription>
          A website that allows users to search for cocktail recipes and save their favorites.
        </ProjectDescription>
      </ProjectItem>
      <ProjectItem>
        <ProjectTitle>IWearables</ProjectTitle>
        <ProjectPreview src="\images\E-Commerce-project.png" alt="IWearables" />
        <ProjectDescription>
          An e-commerce website that allows users to browse and purchase wearable technology.
        </ProjectDescription>
      </ProjectItem>
      <ProjectItem>
        <ProjectTitle>Slingair</ProjectTitle>
        <ProjectPreview src="\images\Slingair-project.png" alt="Slingair" />
        <ProjectDescription>
          A website that allows users to book flights.
        </ProjectDescription>
      </ProjectItem>
      <ProjectItem>
        <ProjectTitle>Wild West Outlaws</ProjectTitle>
        <ProjectPreview src="\images\projet-nyan-cat.png" alt="Wild West Outlaws" />
        <ProjectDescription>
          A game where the player must avoid the snakes falling from the sky.
        </ProjectDescription>
      </ProjectItem>
    </ProjectsWrapper>
  );
};

export default ProjectsSection;
