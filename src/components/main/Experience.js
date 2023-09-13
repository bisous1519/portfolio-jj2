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
      padding-right: 30px;
      border-right: 0.7px solid ${({ theme }) => theme.lineColor};
      & > div {
        & > ul {
          & > li {
            & > i {
              color: #ffb800;
            }
            & > span {
              font-weight: ${({ theme }) => theme.fontWeight.bold};
            }
            & > ul {
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
      padding-left: 30px;
      & > div {
        & > ul {
          & > li {
            & > i {
              color: #009dcf;
            }
            & > ul {
              display: flex;
              flex-direction: column;
              gap: 10px;
              & > li:first-of-type {
                font-weight: ${({ theme }) => theme.fontWeight.bold};
              }
            }
          }
        }
      }
    }
    & > div {
      max-width: 400px;
      margin: 0 auto;
      & > ul {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        & > li {
          display: flex;
          gap: 20px;
          & > ul {
            & > li.gray {
              color: ${({ theme }) => theme.textColor.lightGray};
              font-size: ${({ theme }) => theme.fontSize.small};
            }
          }
        }
      }
    }
  }
`;

export default function Experience() {
  return (
    <ExperienceContainer>
      <div className='awards'>
        <div>
          <Title name='수상' />
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
                    <li className='gray'>{data.desc}</li>
                    <li className='gray'>{data.date}</li>
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className='experience'>
        <div>
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
                    <li className='gray'>{data.desc}</li>
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </ExperienceContainer>
  );
}

