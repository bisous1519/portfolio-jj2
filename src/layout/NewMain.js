import styled from '@emotion/styled';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { keyframes } from '@emotion/react';
import { eomji1 } from '../assets/img';

const oneKeyFrames = keyframes`
    0% {
        transform: translateX(-30px);
        opacity: 0%;
    }
    100% {
        transform: translateX(0px);
        opacity: 100%;
    }
`;

const arrowKeyFrames = keyframes`
    0% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(0px);
    }
`;

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #e4f2f2;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  /* background-color: ${({ theme }) => theme.background} */
  & > .img-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-30%);
    width: 80%;
    height: 93%;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      /* filter: drop-shadow(2px 4px 10px #555); */
    }
  }
  & > ul.introduction {
    position: absolute;
    bottom: 50%;
    right: 52%;
    transform: translateY(50%);
    display: flex;
    flex-direction: column;
    gap: 70px;
    color: ${({ theme }) => theme.textColor.gray};
    & > li {
      font-family: '양진체', 'Yeongdeok', 'Yeongdo' !important;
      font-size: ${({ theme }) => theme.fontSize.xxl};
      /* transform: translateX(30px); */
      opacity: 0%;
      animation: ${oneKeyFrames} 0.6s ease-in forwards;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      &.two {
        font-size: ${({ theme }) => theme.fontSize.title};
        animation-delay: 0.3s;
      }
      &.three {
        font-size: ${({ theme }) => theme.fontSize.xxxl};
        animation-delay: 0.6s;
      }
    }
  }
  & > .arrow {
    position: absolute;
    margin: auto;
    bottom: 30px;
    left: 0;
    right: 0;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.textColor.reverse};
    /* filter: drop-shadow(2px 4px 10px #555); */
    /* box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); */
    font-size: ${({ theme }) => theme.fontSize.xxl};
    animation: ${arrowKeyFrames} 0.8s ease-out alternate infinite;
  }
`;

export default function NewMain() {
  return (
    <MainContainer>
      <div className='img-wrapper'>
        <img src={eomji1} alt='eomji' />
      </div>
      <ul className='introduction'>
        <li className='one'>사용자 관점에서 생각하는</li>
        <li className='two'>프론트엔드 개발자,</li>
        <li className='three'>장엄지 입니다.</li>
        {/* <li className='three'>사용자 친화적인 UI/UX를 구현하기위해</li>
          <li className='four'>
            <i>끊임없이 고민</i> 합니다.
          </li> */}
      </ul>
      <div className='arrow'>
        <IoIosArrowDown />
      </div>
    </MainContainer>
  );
}

