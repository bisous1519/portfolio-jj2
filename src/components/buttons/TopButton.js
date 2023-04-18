import React, { useEffect, useRef } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import throttle from 'lodash.throttle';
import styled from '@emotion/styled';

const TopButtonBox = styled.div`
  position: sticky;
  top: 85vh;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.textColor.lightGray};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadowColor};
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  i {
    color: ${({ theme }) => theme.textColor.primary};
  }
`;

export default function TopButton() {
  const btnEl = useRef();
  const toTop = () => {
    // scrollTo({ top: 0, behavior: 'smooth' });
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
    <TopButtonBox ref={btnEl} onClick={toTop}>
      <i>
        <IoIosArrowUp />
      </i>
    </TopButtonBox>
  );
}

