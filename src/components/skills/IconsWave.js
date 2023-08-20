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
import skillLogo from '../../data/skillLogo';
import useScrollVisible from '../../hooks/useScrollVisible';
import styled from '@emotion/styled';
import IconItem from './SkillIcons';
import SkillIcons from './SkillIcons';

const IconsWaveContainer = styled.div`
  margin-bottom: 60px;
  /* & > ul { */
  & > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.textColor.lightGray};
    margin-bottom: 15px;
  }
  & > div.iconsWave {
    &.invisible {
      opacity: 0;
    }
    opacity: 1;
    transform: ${(props) => `translateX(${props.halfInnerW + 15}px)`};
    transition: opacity 0.3s;
    margin-bottom: 30px;
    & > ul.skillIcons {
      gap: 20px !important;
      & > li {
      }
    }
  }
`;

function WaveBox({ logoArr, sPoint, ePoint }) {
  const halfInnerW = useRef(Math.floor(window.innerWidth / 2));

  const iconsWaveVisible = useScrollVisible(sPoint);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  const iconsWaveEl = useRef();

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
    <div
      className={`iconsWave iconsWave2 ${
        iconsWaveVisible ? 'visible' : 'invisible'
      }`}
      ref={iconsWaveEl}
    >
      <SkillIcons datas={logoArr} />
    </div>
  );
}

export default function IconsWave() {
  const {
    js,
    ts,
    react,
    vue,
    nextjs,
    reactNative,

    redux,
    reduxSaga,
    recoil,
    reactQuery,
    css,
    sass,
    styledComponent,
    emotion,
    tailwind,

    java,
    springBoot,
    mySQL,
    git,
    jira,
  } = skillLogo;
  const logoArr1 = [js, ts, react, vue, nextjs, reactNative];
  const logoArr2 = [
    redux,
    reduxSaga,
    recoil,
    reactQuery,
    css,
    sass,
    styledComponent,
    emotion,
    tailwind,
  ];
  const logoArr3 = [java, springBoot, mySQL, git, jira];

  return (
    <IconsWaveContainer>
      <p>프론트엔드</p>
      <WaveBox logoArr={logoArr1} sPoint={35} ePoint={70} />
      <p>상태관리 라이브러리, CSS</p>
      <WaveBox logoArr={logoArr2} sPoint={40} ePoint={73} />
      <p>백엔드, 협업 툴</p>
      <WaveBox logoArr={logoArr3} sPoint={55} ePoint={76} />
    </IconsWaveContainer>
  );
}

