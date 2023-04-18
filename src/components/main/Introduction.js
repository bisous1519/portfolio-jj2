import React from 'react';
import ProfileImg from '../../assets/img/eomji.png';
import ContactInfo from './ContactInfo';
import styled from '@emotion/styled';

const IntroductionContainer = styled.article`
  width: 100%;
  display: flex;
  padding-bottom: 105px;
  & > div.imgWrapper {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      /* border-radius: 50%; */
      /* margin: 40px 0 0 70px; */
    }
  }
  & > div.introduction {
    flex: 1;
    /* height: 100vh; */
    /* border: 1px solid red; */
    margin-left: 70px;
    & > p {
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.textColor.initial};
      line-height: 20px;
      h2 {
        display: inline-block;
        color: ${({ theme }) => theme.textColor.primary};
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
      b {
        color: ${({ theme }) => theme.textColor.primary};
        font-size: ${({ theme }) => theme.fontSize.lg};
      }
    }
    & > ul {
      margin-top: 20px;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    flex-direction: column;
    & > div.imgWrpper > img {
      margin: 0 auto 55px;
    }
    & > div.introduction {
      margin: 0;
      & > p {
        text-align: center;
      }
      & > ul {
        margin: 35px auto 0;
      }
    }
  }
`;

export default function Introduction() {
  return (
    <IntroductionContainer>
      <div className='imgWrapper'>
        <img src={ProfileImg} alt='profileImage' />
      </div>
      <div className='introduction'>
        <p>
          <h2>안녕하세요,</h2> <br />
          1px의 가치를 아는 프론트엔드 개발자, <h2>장엄지 입니다.</h2> <br />
          사용자 친화적인 UI/UX를 구현하기위해 <br />
          <b>끊임없이 고민</b> 합니다.
          <br />
        </p>
        <ContactInfo />
      </div>
    </IntroductionContainer>
  );
}

