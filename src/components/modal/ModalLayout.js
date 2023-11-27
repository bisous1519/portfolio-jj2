import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import styled from '@emotion/styled';

const ModalLayoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.layerColor};
  display: flex;
  justify-content: center;
  align-items: center;
  & > div.modalWrapper {
    padding-bottom: 20px;
    background-color: ${({ theme }) => theme.background};
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadowColor};
    & > div.topBar {
      position: relative;
      min-height: 30px;
      width: 100%;
      padding: 20px;
      color: ${({ theme }) => theme.textColor.initial};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      & > div {
        width: 30px;
        height: 30px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      & > span {
        font-size: ${({ theme }) => theme.fontSize.title};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        color: ${({ theme }) => theme.textColor.initial};
      }
      & > i {
        position: absolute;
        top: 50%;
        right: 25px;
        transform: translateY(-50%);
        transition: all 0.2s !important;
        width: 25px;
        height: 25px;
        font-size: 18px;
        color: ${({ theme }) => theme.textColor.lightGray};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.textColor.initial};
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

export default function ModalLayout({ children, title, icon, onCloseModal }) {
  const onClose = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };
  return (
    <ModalLayoutContainer onClick={onClose}>
      <div className='modalWrapper'>
        <div className='topBar'>
          {icon && (
            <div>
              <img src={icon.src} alt={icon.alt} />
            </div>
          )}
          {title && <span>{title}</span>}
          <i onClick={onCloseModal}>
            <IoCloseOutline />
          </i>
        </div>
        {children}
      </div>
    </ModalLayoutContainer>
  );
}

