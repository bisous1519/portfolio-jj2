import styled from '@emotion/styled';
import React from 'react';
import Title from '../text/Title';
import { projectData } from '../../data/projects';
import NewProjectItem from './NewProjectItem';

const NewProjectsContainer = styled.section`
  & > p {
    margin-top: 15px;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.textColor.lightGray};
  }
  & > ul {
  }
`;

export default function NewProjects() {
  return (
    <NewProjectsContainer>
      <Title name='프로젝트 경험' />
      <p>
        각 프로젝트 우측상단 'detail'을 통해 세부사항을 확인하실 수 있습니다.
      </p>
      <ul>
        {projectData &&
          projectData.map((data, idx) => (
            <NewProjectItem key={`${data.id}-${idx}`} data={data} />
          ))}
      </ul>
    </NewProjectsContainer>
  );
}

