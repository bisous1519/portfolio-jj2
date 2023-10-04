import styled from '@emotion/styled';
import React from 'react';
import Title from '../text/Title';
import { projectData } from '../../data/projects';
import NewProjectItem from './NewProjectItem';

const NewProjectsContainer = styled.section`
  & > ul {
  }
`;

export default function NewProjects() {
  return (
    <NewProjectsContainer>
      <Title name='프로젝트 경험' hasSub={true} />
      <ul>
        {projectData &&
          projectData.map((data, idx) => (
            <NewProjectItem key={`${data.id}-${idx}`} data={data} />
          ))}
      </ul>
    </NewProjectsContainer>
  );
}

