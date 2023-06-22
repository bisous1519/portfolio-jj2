import React from 'react';
import ContactInfo from '../main/ContactInfo';
import ModalLayout from './ModalLayout';
import { FaRegSmile } from 'react-icons/fa';
import styled from '@emotion/styled';

const ContactModalContainer = styled.section`
  width: 350px;
  height: 200px;
  & > ul {
    margin: auto;
    & > a {
      & + a {
        margin-top: 15px;
      }
    }
  }
  & > p {
    color: ${({ theme }) => theme.textColor.initial};
    font-size: ${({ theme }) => theme.fontSize.base};
    text-align: center;
    margin-top: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-left: 5px;
    }
  }
`;

export default function ContactModal({ onCloseModal }) {
  return (
    <ModalLayout onCloseModal={onCloseModal}>
      <ContactModalContainer>
        <ContactInfo />
        <p>
          감사합니다 <FaRegSmile />
        </p>
      </ContactModalContainer>
    </ModalLayout>
  );
}

