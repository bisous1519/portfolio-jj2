import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { NavContext } from '../App';

const NavContainer = styled.nav`
  position: sticky;
  top: 170px;
  right: 0;
  padding-right: ${({ theme }) => theme.layoutPadding.desktop};
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    & li:not(.project) {
      color: ${({ theme }) => theme.textColor.lightGray};
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: 30px;
      padding-left: 3px;
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.textColor.lightPrimary};
      }
    }
    & li.active {
      color: ${({ theme }) => theme.textColor.primary};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
    & > li.project {
      display: flex;
      & > ul {
        margin-left: 15px;
        padding-left: 5px;
        border-left: 1px solid ${({ theme }) => theme.projectModal.quoteLine};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    display: none;
  }
`;

export default function Nav({ onClickNav }) {
  const { curNav, setCurNav } = useContext(NavContext);
  const [isSelected, setIsSelected] = useState('intro');

  useEffect(() => {
    const { intro, skills, malicon, eeum, ssafast, portfolio, etc } = curNav;
    if (intro) setIsSelected('intro');
    else if (skills) setIsSelected('skills');
    else if (malicon) setIsSelected('malicon');
    else if (eeum) setIsSelected('eeum');
    else if (ssafast) setIsSelected('ssafast');
    else if (portfolio) setIsSelected('portfolio');
    else if (etc) setIsSelected('etc');
    else setIsSelected('intro');
  }, [curNav]);
  return (
    <NavContainer>
      <ul>
        <li
          onClick={() => onClickNav('intro')}
          className={isSelected === 'intro' ? 'active' : ''}
        >
          소개
        </li>
        <li
          onClick={() => onClickNav('skills')}
          className={isSelected === 'skills' ? 'active' : ''}
        >
          기술스택
        </li>
        <li
          onClick={() => onClickNav('malicon')}
          className={
            isSelected === 'malicon' ||
            isSelected === 'eeum' ||
            isSelected === 'ssafast'
              ? 'active'
              : ''
          }
        >
          팀프로젝트
        </li>
        <li className='project'>
          <ul>
            <li
              onClick={() => onClickNav('malicon')}
              className={isSelected === 'malicon' ? 'active' : ''}
            >
              마리콘
            </li>
            <li
              onClick={() => onClickNav('ssafast')}
              className={isSelected === 'ssafast' ? 'active' : ''}
            >
              싸패스트
            </li>
            <li
              onClick={() => onClickNav('eeum')}
              className={isSelected === 'eeum' ? 'active' : ''}
            >
              이음
            </li>
          </ul>
        </li>
        <li
          onClick={() => onClickNav('portfolio')}
          className={isSelected === 'portfolio' ? 'active' : ''}
        >
          개인프로젝트
        </li>
        <li className='project'>
          <ul>
            <li
              onClick={() => onClickNav('portfolio')}
              className={isSelected === 'portfolio' ? 'active' : ''}
            >
              포트폴리오
            </li>
          </ul>
        </li>
        <li
          onClick={() => onClickNav('etc')}
          className={isSelected === 'etc' ? 'active' : ''}
        >
          수상 및 교육
        </li>
      </ul>
    </NavContainer>
  );
}

