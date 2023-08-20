import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import ToggleButton from '../components/buttons/ToggleButton';
import styled from '@emotion/styled';
import useScrollVisible from '../hooks/useScrollVisible';

const HeaderContainer = styled.header`
  &.invisible {
    opacity: 0%;
  }
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: ${({ theme }) => `0px ${theme.layoutPadding.desktop}`};
  backdrop-filter: blur(6px);
  opacity: 100%;
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > ul {
    display: flex;
    align-items: center;
    gap: 30px;
    & > li {
      cursor: pointer;
      height: 30px;
      display: flex;
      align-items: center;
      & > span {
        font-size: ${({ theme }) => theme.fontSize.small};
      }
      & > i {
        margin-left: 5px;
        color: ${({ theme }) => theme.textColor.lightGray};
        font-size: ${({ theme }) => theme.fontSize.smaller};
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 45px;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > li {
        &:first-child {
          margin-left: 5px;
        }
        & + li {
          margin-left: 10px;
        }
        & > a {
          i {
            margin-left: 3px;
          }
        }
      }
    }
  }
`;

export default function Header({ onOpenModal }) {
  const headerVisible = useScrollVisible(80);

  const onClickGithub = () => {
    window.open('https://github.com/bisous1519');
  };
  const onClickNotion = () => {
    window.open('https://bit.ly/eomjii');
  };

  return (
    <HeaderContainer className={headerVisible ? 'visible' : 'invisible'}>
      <ul>
        <li onClick={onClickGithub}>
          <span>깃허브</span>
          <i>
            <FiExternalLink />
          </i>
        </li>
        <li onClick={onClickNotion}>
          <span>노션</span>
          <i>
            <FiExternalLink />
          </i>
        </li>
        <li onClick={onOpenModal}>
          <span>연락처</span>
        </li>
        <li>
          <ToggleButton />
        </li>
      </ul>
    </HeaderContainer>
  );
}

