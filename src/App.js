import { css, Global } from '@emotion/react';
import './assets/css/reset.css';
import NewLayout from './layout/NewLayout';
import ModeProvider from './hooks/ThemeContext';
import { createContext, useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
// import Yeongdo from './assets/fonts/YeongdoOTF.otf';
// import './index.css';

const globalStyle = css`
  * {
    box-sizing: border-box;
    transition: all 0.3s;
  }
  html {
    /* scroll-behavior: smooth; */
  }
  body {
    overflow: overlay;
    overflow-x: hidden !important;
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

export const NavContext = createContext();
export const curNavInit = {
  intro: false,
  skills: false,
  malicon: false,
  eeum: false,
  ssafast: false,
  portfolio: false,
  etc: false,
};

function App() {
  const [curNav, setCurNav] = useState({
    ...curNavInit,
    intro: true,
  });

  return (
    <ModeProvider>
      <NavContext.Provider value={{ curNav, setCurNav }}>
        <Global styles={globalStyle} />
        {/* <Layout /> */}
        <NewLayout />
      </NavContext.Provider>
    </ModeProvider>
  );
}

export default App;

