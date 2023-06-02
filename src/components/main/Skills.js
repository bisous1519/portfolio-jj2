import React from 'react';
import { skills } from '../../data/data';
import styled from '@emotion/styled';

export const SkillsContainer = styled.section`
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 120px;
    li {
      width: 300px;
      margin-top: 50px;
      h3 {
        color: ${({ theme }) => theme.textColor.primary};
        /* color: ${({ theme }) => theme.textColor.initial}; */
        font-size: ${({ theme }) => theme.fontSize.lg};
      }
      p {
        color: ${({ theme }) => theme.textColor.initial};
        font-size: ${({ theme }) => theme.fontSize.base};
        line-height: 20px;
        margin: 10px 15px 0 15px;
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    ul {
      flex-direction: column;
      padding: 0 15px 120px;
      li {
        width: 100%;
        margin-top: 35px;
        &:nth-child(2n) {
          text-align: end;
        }
      }
    }
  }
`;

export default function Skills() {
  return (
    <SkillsContainer className='skills'>
      <div>
        <h3>기술스택</h3>
        <p>JS &#47; React &#47; TS &#47; Nextjs</p>
      </div>
      <ul>
        {skills &&
          skills.map((v) => (
            <li key={v.id}>
              <h3>{v.skill}</h3>
              <p dangerouslySetInnerHTML={{ __html: `${v.summ}` }}></p>
            </li>
          ))}
      </ul>
    </SkillsContainer>
  );
}

