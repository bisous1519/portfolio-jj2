import React, { useRef } from 'react';
import ModalLayout from './ModalLayout';
import styled from '@emotion/styled';
import { eomji7 } from '../../assets/img';
import { IoCopyOutline } from 'react-icons/io5';
import { svgEmail, svgGithub, svgNotion, svgPhone } from '../../assets/icons';

const ContactModalContainer = styled.section`
  width: 500px;
  max-width: 100vw;
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
    }
  }
  & > p {
    margin-top: 15px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
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
        }
      }
      & > p {
        padding: 3px 0px;
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
  const onClickCopy = (kind) => {
    let text = '';
    if (kind === 'email') {
      text = 'anipap2@naver.com';
    } else {
      text = '010-3566-0340';
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
      <ContactModalContainer>
        <div>
          <img src={eomji7} alt='profile img' />
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
            <p>anipap2@naver.com</p>
            <figure onClick={() => onClickCopy('email')}>
              <IoCopyOutline />
              <figcaption>copy</figcaption>
            </figure>
          </li>
          <li>
            <i>
              <img src={svgPhone} alt='phone icon' />
            </i>
            <p>010 . 3566 . 0340</p>
            <figure onClick={() => onClickCopy('phone')}>
              <IoCopyOutline />
              <figcaption>copy</figcaption>
            </figure>
          </li>
          <li>
            <i>
              <img src={svgNotion} alt='notion icon' />
            </i>
            <p>bit.ly/eomjii</p>
          </li>
          <li>
            <i>
              <img src={svgGithub} alt='github icon' />
            </i>
            <p>github.com/bisous1519</p>
          </li>
        </ul>
      </ContactModalContainer>
    </ModalLayout>
  );
}

