import React from 'react';
import ProjectItem from './ProjectItem';
import styled from '@emotion/styled';

const ProjectsContainer = styled.section`
  & > ul {
    display: flex;
    flex-direction: column;
    padding: 0 50px 120px;
    & > li {
      margin-top: 50px;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    & > ul {
      padding: 0 15px 120px;
      & > li {
        margin-top: 35px;
      }
    }
  }
`;

export default function Projects({ children, data }) {
  return (
    <ProjectsContainer className='projects'>
      {children}
      <ul>{data && data.map((v) => <ProjectItem key={v.id} data={v} />)}</ul>
    </ProjectsContainer>
  );
}

