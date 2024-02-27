import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef } from 'react';
import Title from '../text/Title';
import { projectData } from '../../data/projects';
import ProjectItem from './ProjectItem';

const ProjectsContainer = styled.section`
  & > ul {
  }
`;

export default function Projects() {
  return (
    <ProjectsContainer>
      <Title name='프로젝트 경험' hasSub={true} />
      <ul>
        {projectData &&
          projectData.map((data, idx) => (
            <ProjectItem key={`${data.id}-${idx}`} data={data} idx={idx} />
          ))}
      </ul>
    </ProjectsContainer>
  );
}

