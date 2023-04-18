import styled from '@emotion/styled';
import React from 'react';
import EomjiBackground from '../../assets/img/eomji.png';
import { IoIosArrowDown } from 'react-icons/io';
import { keyframes } from '@emotion/react';

const oneKeyFrames = keyframes`
    0% {
        transform: translateY(10px) scale(1.5);
        opacity: 0%;
    }
    100% {
        transform: translateY(0px) scale(1);
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
  width: 100%;
  height: 100vh;
  /* border-radius: 0% 0% 7% 7%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background}
  /* background: linear-gradient(to bottom, #121212 90%, white); */
  opacity: 90%;
  box-shadow: ${({ theme }) => theme.shadowColor};
  & > .img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    & > img {
      /* position: fixed; */
      width: 80%;
      height: 80%;
      object-fit: contain;
      filter: drop-shadow(2px 4px 6px black);
    }
  }
  & > .introduction {
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      color: ${({ theme }) => theme.textColor.initial};
      & > li {
        .one,
        .two {
          transform: translateY(10px) scale(1.5);
          opacity: 0%;
          animation: ${oneKeyFrames} 1s ease-in forwards;
        }
        .two {
          animation-delay: 0.6s;
        }
      }
      & b {
        color: ${({ theme }) => theme.textColor.primary};
        font-size: ${({ theme }) => theme.fontSize.xxl};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
      & i {
        color: ${({ theme }) => theme.textColor.lightPrimary};
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
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
    color: ${({ theme }) => theme.textColor.gray};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    animation: ${arrowKeyFrames} 0.8s ease-out alternate infinite;
  }
`;

export default function NewMain() {
  return (
    <MainContainer>
      <div className='img-wrapper'>
        <img src={EomjiBackground} alt='eomjiBackground' />
      </div>
      <div className='introduction'>
        <ul>
          <li>
            <div className='one'>
              <b>1px의 가치를 아는</b> 프론트엔드 개발자,
            </div>
          </li>
          <li>
            <div className='two'>
              <b>장엄지 입니다.</b>
            </div>
          </li>
          <li className='three'>사용자 친화적인 UI/UX를 구현하기위해</li>
          <li className='four'>
            <i>끊임없이 고민</i> 합니다.
          </li>
        </ul>
      </div>
      <div className='arrow'>
        <IoIosArrowDown />
      </div>
    </MainContainer>
  );
}

