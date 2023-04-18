import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import { ThemeProvider } from '@emotion/react';
import theme from '../../utils/theme';
import { useThemeState } from '../../hooks/ThemeContext';
import useModal from '../../hooks/useModal';
import ContactModal from '../modal/ContactModal';
import styled from '@emotion/styled';
import Contents from './Contents';
import NewMain from './NewMain';
import { ScrollContext } from '../../App';

const LayoutContainer = styled.div`
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

export default function Layout() {
  const scrollPosition = useContext(ScrollContext);
  //   const [scrollPosition, setScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);

  //   const updateScroll = () => {
  //     // setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  //     if (window.scrollY && window.scrollY > window.innerHeight * 0.8) {
  //       setheaderVisible(true);
  //       console.log('header true');
  //     } else {
  //       setheaderVisible(false);
  //       console.log('header false');
  //     }
  //   };

  useEffect(() => {
    if (scrollPosition && scrollPosition > window.innerHeight * 0.8) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
  }, [scrollPosition]);

  //   useEffect(() => {
  //     window.addEventListener('scroll', updateScroll);
  //     // console.log(scrollPosition);
  //     console.log('window', window.innerHeight);
  //   }, []);
  const currentTheme = useThemeState();
  const [openModal, onOpenModal, onCloseModal] = useModal();
  return (
    <ThemeProvider theme={currentTheme === 'light' ? theme.light : theme.dark}>
      <LayoutContainer>
        <Header headerVisible={headerVisible} onOpenModal={onOpenModal} />
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

