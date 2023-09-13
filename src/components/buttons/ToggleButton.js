import React from 'react';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';
import { useThemeState, useThemeToggle } from '../../hooks/ThemeContext';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ToggleButtonBox = styled.div`
  width: 60px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.textColor.lightGray};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadowColor};
  cursor: pointer;
  & > div {
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > i {
      transition: color 0.3s;
      ${({ currentTheme, theme }) =>
        currentTheme === 'light'
          ? css`
              &:first-of-type {
                color: ${theme.textColor.primary};
              }
              &:last-of-type {
                color: ${theme.textColor.lightGray};
              }
            `
          : css`
              &:first-of-type {
                color: ${theme.textColor.lightGray};
              }
              &:last-of-type {
                color: ${theme.textColor.primary};
              }
            `}
    }
  }
  &:active,
  &:hover {
    box-shadow: ${({ theme }) => theme.shadowColor} inset;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 30px;
    position: relative;
    overflow: hidden;
    & > div {
      width: 56px;
      position: absolute;
      top: 0;
      transition: left 0.5s;
      ${({ currentTheme }) =>
        currentTheme === 'light'
          ? css`
              left: 0;
            `
          : css`
              left: -27px;
            `}
      & > i {
        transition: color 0.3s;
        transition-delay: 0.3s;
      }
    }
  }
`;

export default function ToggleButton() {
  const currentTheme = useThemeState();
  const toggleTheme = useThemeToggle();
  return (
    <ToggleButtonBox currentTheme={currentTheme} onClick={toggleTheme}>
      <div>
        <i>
          <IoIosSunny />
        </i>
        <i>
          <IoIosMoon />
        </i>
      </div>
    </ToggleButtonBox>
  );
}

