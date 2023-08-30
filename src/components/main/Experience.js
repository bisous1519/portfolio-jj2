import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Title from '../text/Title';
import awards from '../../data/awards';
import experience from '../../data/experience';
import { LiaAwardSolid } from 'react-icons/lia';
import { LuGraduationCap } from 'react-icons/lu';

const ExperienceContainer = styled.section`
  display: flex;
  & > div {
    flex: 1;
    &.awards {
      & > div {
        & > ul {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          & > li {
            display: flex;
            gap: 10px;
            & > i {
            }
            & > span {
            }
            & > ul {
              /* flex: 1; */
              display: flex;
              flex-direction: column;
              gap: 10px;
              & > li {
              }
            }
          }
        }
      }
    }
    &.experience {
      & > ul {
        & > li {
          & > i {
          }
          & > ul {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 10px;
            & > li {
            }
          }
        }
      }
    }
    & > ul {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      & > li {
        display: flex;
        gap: 10px;
      }
    }
  }
`;

export default function Experience() {
  return (
    <ExperienceContainer>
      <div className='awards'>
        <Title name='수상' />
        <div>
          <ul>
            {awards &&
              awards.map((data) => (
                <li key={`awards-${data.id}`}>
                  <i>
                    <LiaAwardSolid />
                  </i>
                  <span>{data.name}</span>
                  <ul>
                    <li>{data.host}</li>
                    <li>{data.desc}</li>
                    <li>{data.date}</li>
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className='experience'>
        <Title name='교육' />
        <ul>
          {experience &&
            experience.map((data) => (
              <li key={`experience-${data.id}`}>
                <i>
                  <LuGraduationCap />
                </i>
                <ul>
                  <li>{data.name}</li>
                  <li>{data.date}</li>
                  <li>{data.desc}</li>
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </ExperienceContainer>
  );
}

