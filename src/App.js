import { css, Global } from '@emotion/react';
import './assets/css/reset.css';
import NewLayout from './layout/NewLayout';
import ModeProvider from './hooks/ThemeContext';
import { createContext, useEffect, useState } from 'react';

const globalStyle = css`
  * {
    box-sizing: border-box;
  }
  html {
    /* scroll-behavior: smooth; */
  }
  body {
    overflow: overlay;
  }
  body::-webkit-scrollbar {
    width: 6px;
    height: 3px;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #9c9c9c;
    border-radius: 10px;
  }
  body::-webkit-scrollbar-track {
    display: none;
  }
  body::-webkit-scrollbar-corner {
    display: none;
  }
  a {
    text-decoration: none;
  }
`;

export const ScrollContext = createContext();

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    // if (window.scrollY && window.scrollY > window.innerHeight * 0.8) {
    //   setheaderVisible(true);
    //   console.log('header true');
    // } else {
    //   setheaderVisible(false);
    //   console.log('header false');
    // }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    // console.log(scrollPosition);
    // console.log('window', window.innerHeight);
  }, []);
  return (
    <ModeProvider>
      <ScrollContext.Provider value={scrollPosition}>
        <Global styles={globalStyle} />
        {/* <Layout /> */}
        <NewLayout />
      </ScrollContext.Provider>
    </ModeProvider>
  );
}

export default App;

