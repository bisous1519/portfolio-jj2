import styled from '@emotion/styled';
import React from 'react';
import Title from '../text/Title';
import { PiCircleBold } from 'react-icons/pi';
import intro from '../../data/intro';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const NewIntroContainer = styled.section`
  & > ul {
    margin-top: 120px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 80px;
    & > li {
      max-width: 250px;
      /* animation-delay: 2s; */
      & > p {
        margin-bottom: 30px;
        font-size: ${({ theme }) => theme.fontSize.lg};
        text-align: center;
        & > strong {
          font-size: ${({ theme }) => theme.fontSize.xl};
          color: ${({ theme }) => theme.textColor.primary};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
        }
      }
      & > ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 15px;
        & > li {
          line-height: 25px;
          display: flex;
          & > i {
            font-size: 7px;
            margin-right: 7px;
            width: 10px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          & > p {
            flex: 1;
            & > strong {
              color: ${({ theme }) => theme.textColor.primary};
            }
          }
        }
      }
    }
  }
`;

function IntroItem({ data, dataIdx }) {
  const fadeInAnimation = useScrollFadeIn(dataIdx * 0.3);
  return (
    <li {...fadeInAnimation}>
      <p>
        <strong>{data.who}</strong>를 생각합니다.
      </p>
      <ul>
        {data.line.map((line, lineIdx) => (
          <li key={`intro-${dataIdx}-${lineIdx}`}>
            <i>
              <PiCircleBold />
            </i>
            <p dangerouslySetInnerHTML={{ __html: line }} />
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function NewIntro() {
  return (
    <NewIntroContainer>
      <Title name='이렇게 개발합니다' />
      <ul>
        {intro &&
          intro.map((data, dataIdx) => (
            <IntroItem key={`intro-${dataIdx}`} data={data} dataIdx={dataIdx} />
          ))}
      </ul>
    </NewIntroContainer>
  );
}

