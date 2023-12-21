import styled from '@emotion/styled';
import React, { useContext } from 'react';
import Nav from './Nav';
import Projects from '../components/main/Projects';
import Intro from '../components/main/Intro';
import Experience from '../components/main/Experience';
import { NavContext, curNavInit } from '../App';
import Skills from '../components/main/Skills';

const ContentsContainer = styled.div`
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    & > div.contents {
      width: 100%;
      padding: ${({ theme }) => `0px ${theme.layoutPadding.mobile}`};
      & > section {
        margin-top: 90px;
      }
    }
  }
`;

export default function Contents() {
  const { curNav, setCurNav } = useContext(NavContext);

  const onClickNav = (navName) => {
    const clickedEl = document.getElementById(navName);
    if (clickedEl) {
      window.scrollTo({ top: clickedEl.offsetTop, behavior: 'instant' });
      setCurNav({
        ...curNavInit,
        [navName]: true,
      });
    }
  };
  return (
    <ContentsContainer>
      <div className='contents'>
        <Intro />
        <Skills />
        <Projects />
        <Experience />
      </div>
      <Nav onClickNav={onClickNav} />
    </ContentsContainer>
  );
}

