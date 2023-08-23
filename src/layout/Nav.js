import React, { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import TopButton from '../components/buttons/TopButton';
import styled from '@emotion/styled';

const NavContainer = styled.nav`
  border: 1px solid red;
  /* width: 155px; */
  & > ul {
    position: sticky;
    top: 170px;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 100px;
    display: flex;
    flex-direction: column;
    /* gap: 3px; */
    li {
      /* border: 1px solid red; */
      font-size: ${({ theme }) => theme.fontSize.base};
      padding: 10px 5px;
      color: ${({ theme }) => theme.textColor.lightGray};
      cursor: pointer;
      &:nth-child(${({ selected }) => selected}) {
        color: ${({ theme }) => theme.textColor.primary};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    display: none;
  }
`;

const topArr = [0, 0, 424, 904, 1792];

export default function Nav() {
  const [selected, setSelected] = useState(1);
  const onClickNav = (num, top) => {
    setSelected(num);
    window.scrollTo({ top: top, behavior: 'smooth' });
  };
  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {
        console.log(window.scrollY);
        if (window.scrollY < topArr[2]) {
          setSelected(1);
        } else if (window.scrollY < topArr[3]) {
          setSelected(2);
        } else if (window.scrollY < topArr[4]) {
          setSelected(3);
        } else {
          setSelected(4);
        }
      }, 300)
    );
  }, []);
  return (
    <NavContainer selected={selected}>
      <ul>
        <li onClick={() => onClickNav(1, topArr[1])}>소개</li>
        <li onClick={() => onClickNav(2, topArr[2])}>기술스택</li>
        <li onClick={() => onClickNav(3, topArr[3])}>
          <p>프로젝트</p>
          <ul>
            <li>마리콘</li>
            <li>이음</li>
            <li>싸패스트</li>
          </ul>
        </li>
        <li onClick={() => onClickNav(4, topArr[4])}>수상 및 교육</li>
      </ul>
    </NavContainer>
  );
}

