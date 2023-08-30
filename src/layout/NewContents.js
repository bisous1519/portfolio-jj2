import styled from '@emotion/styled';
import React from 'react';
import Nav from './Nav';
import { NewSkills } from '../components/main';
import NewProjects from '../components/main/NewProjects';
import NewIntro from '../components/main/NewIntro';
import Experience from '../components/main/Experience';

const NewContentsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  & > div.contents {
    flex: 1;
    padding: ${({ theme }) => `0px ${theme.layoutPadding.desktop}`};
    & > section {
      margin-top: 150px;
      width: 100%;
    }
  }
`;

export default function NewContents() {
  return (
    <NewContentsContainer>
      <div className='contents'>
        <NewIntro />
        <NewSkills />
        <NewProjects />
        <Experience />
      </div>
      <Nav />
    </NewContentsContainer>
  );
}

