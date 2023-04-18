import styled from '@emotion/styled';
import React from 'react';
import Skills from '../main/Skills';
import Projects from '../main/Projects';
import Footer from './Footer';
import { myProject, teamProject } from '../../mocks/data';
import NewSkills from '../main/NewSkills';

const ContentsContainer = styled.div`
  margin-top: 10px;
  padding: 0 50px;
  & > section {
    max-width: 100%;
    & > div {
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;
      position: sticky;
      top: 59px;
      background-color: ${({ theme }) => theme.background};
      transition: background-color 0.3s;
      padding-top: 15px;
      z-index: 10;
      h3 {
        color: ${({ theme }) => theme.textColor.primary};
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
      p {
        flex: 1;
        color: ${({ theme }) => theme.textColor.lightGray};
        font-size: ${({ theme }) => theme.fontSize.small};
        margin-left: 20px;
        font-weight: ${({ theme }) => theme.fontWeight.base};
      }
      &::after {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.textColor.lightGray};
        margin-top: 15px;
        box-shadow: ${({ theme }) => theme.shadowColor};
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
    padding: 0;
    & > section {
      & > div {
        top: 44px;
        h3 {
        }
        p {
        }
        &::after {
        }
      }
    }
  }
`;

export default function Contents() {
  return (
    <ContentsContainer>
      <NewSkills />
      <Skills />
      <Projects data={teamProject}>
        <div>
          <h3>팀프로젝트</h3>
          <p>디벨로픽 &#47; 위케아</p>
        </div>
      </Projects>
      <Projects data={myProject}>
        <div>
          <h3>개인프로젝트</h3>
          <p>스타벅스 &#47; 북시</p>
        </div>
      </Projects>
      <Footer />
    </ContentsContainer>
  );
}

