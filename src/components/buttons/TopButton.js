import React, { useEffect, useRef } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import throttle from 'lodash.throttle';
import styled from '@emotion/styled';

const TopButtonBox = styled.button`
  position: fixed;
  bottom: 50px;
  right: ${({ theme }) => theme.layoutPadding.desktop};
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.textColor.lightGray};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};
  display: flex;
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
  const btnEl = useRef();
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {
        console.log(window.scrollY);
        if (window.scrollY > 350) {
          btnEl.current.style.display = 'flex';
          setTimeout(() => {
            btnEl.current.style.opacity = 1;
          }, 200);
        } else {
          btnEl.current.style.opacity = 0;
          setTimeout(() => {
            btnEl.current.style.display = 'none';
          }, 200);
        }
      }, 300)
    );
  }, []);
  return (
    <TopButtonBox className='topButton' ref={btnEl} onClick={toTop}>
      <i>
        <IoIosArrowUp />
      </i>
    </TopButtonBox>
  );
}

