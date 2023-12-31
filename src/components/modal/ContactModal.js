import React, { useRef, useState } from 'react';
import ModalLayout from './ModalLayout';
import styled from '@emotion/styled';
import { eomji7, eomji8 } from '../../assets/img';
import { IoCopyOutline } from 'react-icons/io5';
import { svgEmail, svgGithub, svgNotion, svgPhone } from '../../assets/icons';
import { css, keyframes } from '@emotion/react';
import { useThemeState } from '../../hooks/ThemeContext';

const imgFadeinKeyFrame = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const nameFadeinKeyFrame = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const ContactModalContainer = styled.section`
  width: 500px;
  max-width: 90vw;
  overflow: hidden !important;
  & > div {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      animation: ${imgFadeinKeyFrame} 0.3s ease-in forwards;
      animation-delay: 0.5s;
    }
  }
  & > p {
    margin-top: 15px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    opacity: 0;
    animation: ${nameFadeinKeyFrame} 0.3s ease-in forwards;
    animation-delay: 0.5s;
  }
  & > ul {
    margin: 20px auto 5px auto;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    & > li {
      display: flex;
      align-items: center;
      gap: 10px;
      & > i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 17px;
        height: 17px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          ${({ currentTheme }) =>
            currentTheme === 'dark' &&
            css`
              filter: invert(1);
            `}
        }
      }
      & > a {
        padding: 3px 0px;
        color: ${({ theme }) => theme.textColor.initial};
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.textColor.primary};
        }
      }
      & > figure {
        position: relative;
        font-size: 14px;
        color: ${({ theme }) => theme.textColor.lightGray};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: color 0s !important;
        &:hover {
          color: ${({ theme }) => theme.textColor.initial};
          /* transform: scale(1.1); */
          & > figcaption {
            display: inline;
          }
        }
        & > figcaption {
            position: absolute;
            left: 50%;
            bottom: -24px;
            transform: translateX(-50%);
            font-size: ${({ theme }) => theme.fontSize.smaller};
            background-color: ${({ theme }) => theme.textColor.gray};
            color: ${({ theme }) => theme.textColor.reverse};
            padding: 3px 5px 4px 5px;
            border-radius: 5px;
            transition: opacity 0.2s;
            white-space: nowrap;
            z-index: 10;
            display: none;
          }
        }
      }
    }
  }
`;

export default function ContactModal({ onCloseModal }) {
  const currentTheme = useThemeState();
  const [emailFigCaption, setEmailFigCaption] = useState('copy');
  const [phoneFigCaption, setPhoneFigCaption] = useState('copy');

  const onClickCopy = (kind) => {
    let text = '';
    if (kind === 'email') {
      text = 'anipap2@naver.com';
      setEmailFigCaption('copied!');
      setTimeout(() => {
        setEmailFigCaption('copy');
      }, 700);
    } else {
      text = '010-3566-0340';
      setPhoneFigCaption('copied!');
      setTimeout(() => {
        setPhoneFigCaption('copy');
      }, 700);
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(`'${text}' copied!`);
      })
      .catch((err) => {
        console.log('Something went wrong ㅜㅜ', err);
      });
  };
  return (
    <ModalLayout onCloseModal={onCloseModal}>
      <ContactModalContainer currentTheme={currentTheme}>
        <div>
          <img src={eomji8} alt='profile img' />
        </div>
        <p>장엄지</p>
        <ul>
          <li>
            <i>
              <img
                src={svgEmail}
                alt='email icon'
                style={{ width: '16px', height: '16px' }}
              />
            </i>
            <a href='mailto:anipap2@naver.com'>anipap2@naver.com</a>
            <figure onClick={() => onClickCopy('email')}>
              <IoCopyOutline />
              <figcaption>{emailFigCaption}</figcaption>
            </figure>
          </li>
          <li>
            <i>
              <img src={svgPhone} alt='phone icon' />
            </i>
            <a href='tel:010-3566-0340'>010 . 3566 . 0340</a>
            <figure onClick={() => onClickCopy('phone')}>
              <IoCopyOutline />
              <figcaption>{phoneFigCaption}</figcaption>
            </figure>
          </li>
          <li>
            <i>
              <img src={svgNotion} alt='notion icon' />
            </i>
            <a href='https://bit.ly/eomjii' target='_blank' rel='noreferrer'>
              bit.ly/eomjii
            </a>
          </li>
          <li>
            <i>
              <img src={svgGithub} alt='github icon' />
            </i>
            <a
              href='https://github.com/bisous1519'
              target='_blank'
              rel='noreferrer'
            >
              github.com/bisous1519
            </a>
          </li>
        </ul>
      </ContactModalContainer>
    </ModalLayout>
  );
}

