import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../utils/theme';
import { useThemeState } from '../hooks/ThemeContext';
import useModal from '../hooks/useModal';
import ContactModal from '../components/modal/ContactModal';
import { ScrollContext } from '../App';
import { Contents, Header, Nav, NewMain } from './index';
// import useScrollVisible from '../hooks/useScrollVisible';

const LayoutContainer = styled.div`
  color: ${({ theme }) => theme.textColor.initial};
  background-color: ${({ theme }) => theme.background};
  transition: all 0.3s;
  /* position: relative; */
  & > .main {
    max-width: 100%;
    /* padding: 130px 30px 0 30px; */
    display: flex;
  }
  .inner {
    max-width: 1150px;
    padding: 0 30px;
    margin: 0 auto;
    height: 100%;
  }
  & > .contents {
    max-width: 100%;
    display: flex;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    & > .main {
      padding: 100px 20px 0 20px;
      display: block;
    }
    .inner {
      max-width: ${({ theme }) => theme.size.mobile};
      padding: 0 20px;
    }
  }
`;

export default function NewLayout() {
  const currentTheme = useThemeState();
  const [openModal, onOpenModal, onCloseModal] = useModal();

  return (
    <ThemeProvider theme={currentTheme === 'light' ? theme.light : theme.dark}>
      <LayoutContainer>
        <Header onOpenModal={onOpenModal} />
        <NewMain />
        <div className='contents'>
          <Contents />
          <Nav />
        </div>
        {openModal && <ContactModal onCloseModal={onCloseModal} />}
      </LayoutContainer>
    </ThemeProvider>
  );
}

