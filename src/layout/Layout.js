import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import { ThemeProvider } from '@emotion/react';
import theme from '../utils/theme';
import { useThemeState } from '../hooks/ThemeContext';
import useModal from '../hooks/useModal';
import ContactModal from '../components/modal/ContactModal';
import styled from '@emotion/styled';

const LayoutContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  transition: all 0.3s;
  /* position: relative; */
  & > .main {
    max-width: 100%;
    padding: 130px 30px 0 30px;
    display: flex;
  }
  .inner {
    max-width: 1150px;
    padding: 0 30px;
    margin: 0 auto;
    height: 100%;
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

export default function Layout() {
  const currentTheme = useThemeState();
  const [openModal, onOpenModal, onCloseModal] = useModal();
  return (
    <ThemeProvider theme={currentTheme === 'light' ? theme.light : theme.dark}>
      <LayoutContainer>
        <Header onOpenModal={onOpenModal} />
        <div className='main'>
          <Main />
          <Nav />
        </div>
        {openModal && <ContactModal onCloseModal={onCloseModal} />}
      </LayoutContainer>
    </ThemeProvider>
  );
}

