import React, { useContext, useEffect, useState } from 'react';
import { FiExternalLink, FiMenu } from 'react-icons/fi';
import ToggleButton from '../components/buttons/ToggleButton';
import styled from '@emotion/styled';
import { NavContext } from '../App';

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
  & > i {
    display: none;
  }
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
    padding: ${({ theme }) => `0px ${theme.layoutPadding.mobile}`};
    & > i {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSize.lg};
      color: ${({ theme }) => theme.textColor.initial};
      padding: 5px;
    }
    & > ul {
      position: absolute;
      top: 45px;
      /* right: ${({ theme }) => theme.layoutPadding.mobile}; */
      right: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 15px;
      background-color: ${({ theme }) => theme.background};
      box-shadow: ${({ theme }) => theme.shadowColor};
      border-radius: 10px;
      padding: 15px;
      &.open {
        display: flex;
      }
      &.close {
        display: none;
      }
    }
  }
`;

export default function Header({ onOpenModal }) {
  const { curNav } = useContext(NavContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const onClickGithub = () => {
    window.open('https://github.com/bisous1519');
  };
  const onClickNotion = () => {
    window.open('https://bit.ly/eomjii');
  };

  const onClickBurger = () => {
    setIsOpenBurger((prev) => !prev);
  };

  useEffect(() => {
    if (!curNav || curNav.intro) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [curNav]);

  return (
    <HeaderContainer className={isVisible ? 'visible' : 'invisible'}>
      <i onClick={onClickBurger}>
        <FiMenu />
      </i>
      <ul className={isOpenBurger ? 'open' : 'close'}>
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

