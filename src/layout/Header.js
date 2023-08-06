import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import ToggleButton from '../components/buttons/ToggleButton';
import styled from '@emotion/styled';
import useScrollVisible from '../hooks/useScrollVisible';

const HeaderContainer = styled.header`
  &.invisible {
    opacity: 0%;
  }
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  backdrop-filter: blur(6px);
  opacity: 100%;
  transition: background-color 0.3s, opacity 0.3s;
  z-index: 9999;
  ul {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & > li {
      font-size: ${({ theme }) => theme.fontSize.base};
      margin-left: 30px;
      & > a {
        color: ${({ theme }) => theme.textColor.initial};
        i {
          margin-left: 5px;
          color: ${({ theme }) => theme.textColor.lightGray};
          font-size: ${({ theme }) => theme.fontSize.small};
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 45px;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > li {
        &:first-child {
          margin-left: 5px;
        }
        & + li {
          margin-left: 10px;
        }
        & > a {
          i {
            margin-left: 3px;
          }
        }
      }
    }
  }
`;

export default function Header({ onOpenModal }) {
  const headerVisible = useScrollVisible(80);

  return (
    <HeaderContainer className={headerVisible ? 'visible' : 'invisible'}>
      <div className='inner'>
        <ul>
          {/* <li>
            <a href='javascript:void(0)'>이력서</a>
          </li> */}
          <li>
            <a
              href='https://github.com/bisous1519'
              target='_blank'
              rel='noreferrer'
            >
              깃허브
              <i>
                <FiExternalLink />
              </i>
            </a>
          </li>
          <li>
            <a href='https://bit.ly/eomjii' target='_blank' rel='noreferrer'>
              노션
              <i>
                <FiExternalLink />
              </i>
            </a>
          </li>
          <li onClick={onOpenModal}>
            <a href='javascript:void(0)'>연락처</a>
          </li>
          <li>
            <ToggleButton />
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
}
