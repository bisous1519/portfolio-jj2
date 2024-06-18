import styled from '@emotion/styled';
import React from 'react';
import Title from '../text/Title';
import { LiaAwardSolid } from 'react-icons/lia';
import { LuGraduationCap } from 'react-icons/lu';
import useScrollNav from '../../hooks/useScrollNav';
import { awards, certificate, experience } from '../../data/experience';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

const ExperienceContainer = styled.section`
  display: flex;
  & > div {
    flex: 1;
    &.left {
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
    &.right {
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
    & > div.awards,
    & > div.experience,
    & > div.etc {
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
          line-height: 1.1;
          & > ul {
            & > li.gray {
              color: ${({ theme }) => theme.textColor.lightGray};
              font-size: ${({ theme }) => theme.fontSize.small};
            }
          }
        }
      }
    }
    & > div.etc {
      margin-top: 50px;
      & > ul {
        & > li {
          & > i {
            color: #fc7491;
          }
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    flex-direction: column;
    & > div {
      &.left,
      &.right {
        padding: 0;
        border: none;
        & > div {
          & > ul {
            padding: 0px 25px;
            & > li {
              gap: 12px;
            }
          }
        }
      }
      &.left {
        & span {
          min-width: 45px;
        }
      }
      &.right {
        & > div.experience,
        & > div.etc {
          margin-top: 90px;
        }
      }
    }
  }
`;

export default function Experience() {
  const nav = useScrollNav('etc');
  return (
    <ExperienceContainer {...nav}>
      <div className='left'>
        <div className='awards'>
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
      <div className='right'>
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
                    <li className='gray'>{data.desc}</li>
                  </ul>
                </li>
              ))}
          </ul>
        </div>
        <div className='etc'>
          <Title name='자격 / 어학' />
          <ul>
            {certificate &&
              certificate.map((data) => (
                <li key={`etc-${data.id}`}>
                  <i>
                    <HiOutlineBadgeCheck />
                  </i>
                  <ul>
                    <li>{data.name}</li>
                    <li className='gray'>{data.date}</li>
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </ExperienceContainer>
  );
}

