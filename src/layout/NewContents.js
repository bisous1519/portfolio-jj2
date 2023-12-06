import styled from '@emotion/styled';
import React, { useContext } from 'react';
import Nav from './Nav';
import { NewSkills } from '../components/main';
import NewProjects from '../components/main/NewProjects';
import NewIntro from '../components/main/NewIntro';
import Experience from '../components/main/Experience';
import { NavContext } from '../App';

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
  const { curNav, setCurNav } = useContext(NavContext);

  const onClickNav = (navName) => {
    const clickedEl = document.getElementById(navName);
    if (clickedEl) {
      window.scrollTo({ top: clickedEl.offsetTop, behavior: 'instant' });
      setCurNav({
        intro: false,
        skills: false,
        malicon: false,
        eeum: false,
        ssafast: false,
        etc: false,
        [navName]: true,
      });
    }
  };
  return (
    <NewContentsContainer>
      <div className='contents'>
        <NewIntro />
        <NewSkills />
        <NewProjects />
        <Experience />
      </div>
      <Nav onClickNav={onClickNav} />
    </NewContentsContainer>
  );
}

