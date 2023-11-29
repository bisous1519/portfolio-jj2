import React, { useContext, useEffect, useRef } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import throttle from 'lodash.throttle';
import styled from '@emotion/styled';
import { ScrollContext } from '../../App';

const TopButtonBox = styled.button`
  position: fixed;
  bottom: 50px;
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
`;

export default function TopButton() {
  const scrollPosition = useContext(ScrollContext);
  const btnEl = useRef();
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const { current } = btnEl;

    if (scrollPosition > 350) {
      current.style.display = 'flex';
      setTimeout(() => {
        current.style.opacity = 1;
      }, 200);
    } else {
      current.style.opacity = 0;
      setTimeout(() => {
        current.style.display = 'none';
      }, 200);
    }
  }, [scrollPosition]);
  return (
    <TopButtonBox className='topButton' ref={btnEl} onClick={toTop}>
      <i>
        <IoIosArrowUp />
      </i>
    </TopButtonBox>
  );
}

