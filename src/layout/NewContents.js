import styled from '@emotion/styled';
import React from 'react';
import Nav from './Nav';
import { NewSkills } from '../components/main';
import NewProjects from '../components/main/NewProjects';

const NewContentsContainer = styled.div``;

export default function NewContents() {
  return (
    <NewContentsContainer>
      <div className='contents'>
        <NewSkills />
        <NewProjects />
      </div>
      <div className='nav'>
        <Nav />
      </div>
    </NewContentsContainer>
  );
}

