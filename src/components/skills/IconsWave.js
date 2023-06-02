import { useEffect, useRef, useState } from 'react';
import {
  JSlogo,
  Nextjslogo,
  Reactlogo,
  Reduxlogo,
  ReduxSagalogo,
  Sasslogo,
  StyledComponentslogo,
  TSlogo,
  Vuejslogo,
} from '../../assets/icons';
import useScrollVisible from '../../hooks/useScrollVisible';
import styled from '@emotion/styled';

const IconsWaveContainer = styled.div`
  margin-bottom: 50px;
  & > ul.iconsWave {
    &.invisible {
      opacity: 0;
    }
    opacity: 1;
    transform: ${(props) => `translateX(${props.halfInnerW + 15}px)`};
    transition: opacity 0.3s;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    & > li {
      width: 30px;
      height: 30px;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: ${({ theme }) => theme.shadowColor};
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

function WaveBox({ logoArr, sPoint, ePoint, halfInnerW }) {
  const iconsWaveVisible = useScrollVisible(sPoint);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  const iconsWaveEl = useRef();

  //   const sPoint = 45; // scrollPercent가 45% 부터
  //   const ePoint = 80; // scrollPercent가 85% 일 때 까지

  useEffect(() => {
    if (halfInnerW.current && iconsWaveEl.current && iconsWaveVisible) {
      if (scrollPercent <= ePoint) {
        const w = halfInnerW.current;
        const x = w - w * ((scrollPercent - sPoint) / (ePoint - sPoint));
        iconsWaveEl.current.style.setProperty('transition', 'transform 0.1s');
        iconsWaveEl.current.style.setProperty(
          'transform',
          `translateX(${x}px)`
        );
      } else {
        iconsWaveEl.current.style.setProperty('transform', `translateX(0px)`);
      }
    }
  }, [scrollPercent]);

  useEffect(() => {
    setScrollPercent(Math.floor((scrollPosition / window.innerHeight) * 100));
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    });
  }, []);
  return (
    <ul
      className={`iconsWave iconsWave2 ${
        iconsWaveVisible ? 'visible' : 'invisible'
      }`}
      ref={iconsWaveEl}
    >
      {logoArr.length > 0 &&
        logoArr.map((logo, idx) => (
          <li key={idx}>
            <img src={logo.src} alt={logo.alt} />
          </li>
        ))}
    </ul>
  );
}

export default function IconsWave({ halfInnerW }) {
  const logoArr1 = [
    { src: JSlogo, alt: 'javascript logo', des: 'Javascript' },
    { src: TSlogo, alt: 'TS logo', des: 'Typescript' },
    { src: Reactlogo, alt: 'React logo', des: 'React' },
    { src: Vuejslogo, alt: 'Vuejs logo', des: 'Vue.js' },
    { src: Nextjslogo, alt: 'Nextjs logo', des: 'Next.js' },
  ];
  const logoArr2 = [
    { src: Reduxlogo, alt: 'Redux logo', des: 'Redux' },
    { src: ReduxSagalogo, alt: 'ReduxSaga logo', des: 'Redux saga' },
    { src: Sasslogo, alt: 'Sass logo', des: 'sass' },
    {
      src: StyledComponentslogo,
      alt: 'StyledComponents logo',
      des: 'styled-components',
    },
  ];

  return (
    <IconsWaveContainer>
      <WaveBox
        logoArr={logoArr1}
        sPoint={35}
        ePoint={70}
        halfInnerW={halfInnerW}
      />
      <WaveBox
        logoArr={logoArr2}
        sPoint={40}
        ePoint={73}
        halfInnerW={halfInnerW}
      />
    </IconsWaveContainer>
  );
}

