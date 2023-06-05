import styled from '@emotion/styled';
import React from 'react';
import Footer from './Footer';
import { myProject, teamProject } from '../data/data';
import { NewSkills, Projects, Skills } from '../components/main';
import NewProjects from '../components/main/NewProjects';

const ContentsContainer = styled.div`
  margin-top: 50px;
  padding: 0 50px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  & > section {
    width: 100%;
    top: 59px;
    & > div {
      /* display: flex;
      align-items: flex-end;
      flex-wrap: wrap;
      position: sticky;
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
      } */
      /* &::after {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.textColor.lightGray};
        margin-top: 15px;
        box-shadow: ${({ theme }) => theme.shadowColor};
      }*/
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
      <NewProjects />
      {/* <Skills />
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
      </Projects> */}
      <div style={{ height: '500px' }}></div>
      <Footer />
    </ContentsContainer>
  );
}

