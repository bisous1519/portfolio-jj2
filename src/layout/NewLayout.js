import React from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../utils/theme';
import { useThemeState } from '../hooks/ThemeContext';
import useModal from '../hooks/useModal';
import ContactModal from '../components/modal/ContactModal';
import { Footer, Header, NewMain } from './index';
import NewContents from './NewContents';

const LayoutContainer = styled.div`
  color: ${({ theme }) => theme.textColor.initial};
  background-color: ${({ theme }) => theme.background};
  transition: all 0.3s;
  width: 100vw;
  /* overflow-x: hidden; */
  & > div {
    width: 100%;
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
        <NewContents />
        <Footer />
        {openModal && <ContactModal onCloseModal={onCloseModal} />}
      </LayoutContainer>
    </ThemeProvider>
  );
}

