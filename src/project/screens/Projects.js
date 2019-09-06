import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../hooks";

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;
`;

const ProjectsScreen = () => {
  const projects = useProjects();

  return (
    <Projects>
      {projects.map(project => (
        <Link key={project.id} to={`/projects/${project.id}`}>
          <ProjectCard {...project} />
        </Link>
      ))}
    </Projects>
  );
};

export default ProjectsScreen;
