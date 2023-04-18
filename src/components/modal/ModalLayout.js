import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import styled from '@emotion/styled';

const ModalLayoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.layerColor};
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    padding-bottom: 20px;
    background-color: ${({ theme }) => theme.background};
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadowColor};
    & > div {
      width: 100%;
      padding: 20px;
      text-align: right;
      color: ${({ theme }) => theme.textColor.initial};
      & > svg {
        &:hover {
          cursor: pointer;
          color: ${({ theme }) => theme.textColor.primary};
        }
      }
    }
    & > section {
      padding: 0 30px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 6px;
        height: 3px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.textColor.lightGray};
        border-radius: 10px;
      }
      &::-webkit-scrollbar-track {
        display: none;
      }
      &::-webkit-scrollbar-corner {
        display: none;
      }
    }
  }
`;

export default function ModalLayout({ children, onCloseModal }) {
  const onClose = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };
  return (
    <ModalLayoutContainer onClick={onClose}>
      <div>
        <div onClick={onCloseModal}>
          <IoCloseOutline />
        </div>
        {children}
      </div>
    </ModalLayoutContainer>
  );
}

