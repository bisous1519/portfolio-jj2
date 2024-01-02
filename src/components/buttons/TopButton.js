import React, { useContext, useEffect, useRef, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import throttle from 'lodash.throttle';
import styled from '@emotion/styled';
import { NavContext, ScrollContext } from '../../App';
import useScrollPosition from '../../hooks/useScrollPosition';

const TopButtonBox = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.layoutPadding.desktop};
  right: ${({ theme }) => theme.layoutPadding.desktop};
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.textColor.lightGray};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};
  display: none;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadowColor};
  opacity: 0;
  transition: opacity 0.2s;
  cursor: pointer;
  i {
    color: ${({ theme }) => theme.textColor.primary};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    bottom: ${({ theme }) => theme.layoutPadding.mobile};
    right: ${({ theme }) => theme.layoutPadding.mobile};
  }
`;

export default function TopButton() {
  const { curNav } = useContext(NavContext);
  const [isVisible, setIsVisible] = useState(false);

  const btnEl = useRef();
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const { current } = btnEl;

    if (!curNav || curNav.intro) {
      current.style.opacity = 0;
      setTimeout(() => {
        current.style.display = 'none';
      }, 200);
    } else {
      current.style.display = 'flex';
      setTimeout(() => {
        current.style.opacity = 1;
      }, 200);
    }
  }, [curNav]);
  return (
    <TopButtonBox className='topButton' ref={btnEl} onClick={toTop}>
      <i>
        <IoIosArrowUp />
      </i>
    </TopButtonBox>
  );
}

