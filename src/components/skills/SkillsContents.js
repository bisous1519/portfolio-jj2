import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { PiCircleBold } from 'react-icons/pi';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const SkillsContentsContainer = styled.article`
  margin-top: 120px;
  & > p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.bolder};
  }
  & > ul.contents {
    padding: 0px 50px;
    margin: 0 auto;
    margin-top: 50px;
    /* max-width: ${({ isFrontend }) => (isFrontend ? '1000px' : '840px')}; */
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    & > li {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 50px;
      & > div.summ {
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        & > div.img {
          height: 100%;
          border-radius: 10px;
          overflow: hidden;
          & > img {
            height: 100%;
            object-fit: cover;
          }
        }
        & > div.name {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 15px;
          & > p {
            font-size: ${({ theme }) => theme.fontSize.lg};
          }
          & > ul.bar {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 4px;
            & > li {
              width: 17px;
              height: 4px;
              border-radius: 3px;
              background-color: ${({ theme }) => theme.textColor.lightGray};
              &.fill {
                background-color: ${({ theme }) =>
                  theme.textColor.lightPrimary};
              }
            }
          }
        }
      }
      & > ul.desc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        flex: 1;
        & > li {
          line-height: 25px;
          color: ${({ theme }) => theme.textColor.gray};
          /* font-size: ${({ theme }) => theme.fontSize.base}; */
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
          }
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    & > ul.contents {
      padding: 0px 25px;
      margin-top: 80px;
      gap: 80px;
      & > li {
        flex-direction: column;
        gap: 35px;
        & > div.summ {
          & > div.img {
            & > img {
            }
          }
          & > div.name {
            & > p {
            }
            & > ul.bar {
            }
          }
        }
        & > ul.desc {
          & > li {
            & > i {
            }
            & > p {
            }
          }
        }
      }
    }
  }
`;

function SkillsItem({ name, skill, skillIdx }) {
  const fadeInAnimation = useScrollFadeIn();
  return (
    <li {...fadeInAnimation}>
      <div className='summ'>
        <div className='img'>
          <img src={skill.icon.src} alt={skill.icon.alt} />
        </div>
        <div className='name'>
          <p>{skill.name}</p>
          <ul className='bar'>
            {new Array(skill.lv).fill(null).map(() => (
              <li className='fill'></li>
            ))}
            {new Array(5 - skill.lv).fill(null).map(() => (
              <li></li>
            ))}
          </ul>
        </div>
      </div>
      <ul className='desc'>
        {skill.des.map((line, lineIdx) => (
          <li key={`skill-${name}-${skillIdx}-${lineIdx}`}>
            <i>
              <PiCircleBold />
            </i>
            <p>{line}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function SkillsContents({ isFrontend, data }) {
  const [name, setName] = useState('프론트엔드');
  useEffect(() => {
    if (isFrontend) setName('프론트엔드');
    else setName('그 외');
  }, [isFrontend]);

  return (
    <SkillsContentsContainer isFrontend={isFrontend}>
      <p>{name}</p>
      <ul className='contents'>
        {data &&
          data.map((skill, skillIdx) => (
            <SkillsItem
              key={`skill-${name}-${skillIdx}`}
              name={name}
              skill={skill}
              skillIdx={skillIdx}
            />
          ))}
      </ul>
    </SkillsContentsContainer>
  );
}

