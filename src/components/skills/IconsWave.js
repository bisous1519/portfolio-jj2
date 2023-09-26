import { useCallback, useEffect, useRef, useState } from 'react';
import skillLogo from '../../data/skillLogo';
import styled from '@emotion/styled';
import SkillIcons from './SkillIcons';

const WaveBoxContainer = styled.div`
  position: absolute;
  left: 0px;
  transform: translateX(500px);
  transition: transform 0s;
  & > ul {
  }
`;

const IconsWaveContainer = styled.ul`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > li {
    position: relative;
    margin-bottom: 32px;
    & > p {
      font-size: ${({ theme }) => theme.fontSize.small};
      color: ${({ theme }) => theme.textColor.lightGray};
      margin-bottom: 15px;
    }
  }
`;

function WaveBox({ scrollActive, activeScrollY, isAppearFromBottom, logoArr }) {
  const [translateX, setTranslateX] = useState(0);
  const [startMoveTo, setStartMoveTo] = useState(window.innerHeight * 0.2);

  const baseWidth = window.innerWidth * 0.5;
  const opacityFrom = 0.3;
  const opacityTo = 1;

  const handleScroll = useCallback(() => {
    const curScrollY = window.scrollY;
    const scrollFraction =
      (curScrollY - activeScrollY) / (window.innerHeight * 0.7);
    const moveTo = isAppearFromBottom
      ? baseWidth - baseWidth * scrollFraction
      : startMoveTo - baseWidth * scrollFraction;
    if (moveTo > baseWidth) {
      setTranslateX(baseWidth);
    } else if (moveTo < 0) {
      setTranslateX(0);
    } else {
      setTranslateX(moveTo);
    }
  }, [activeScrollY, isAppearFromBottom, baseWidth, startMoveTo]);

  // useEffect(() => {
  //   console.log(`translateX(${translateX}px`);
  // }, [translateX]);

  useEffect(() => {
    if (scrollActive) {
      window.addEventListener('scroll', handleScroll);
    } else {
      if (isAppearFromBottom) {
        setStartMoveTo(
          baseWidth -
            baseWidth *
              ((window.scrollY - activeScrollY) / (window.innerHeight * 0.7))
        );
      }
      setTimeout(
        () => window.removeEventListener('scroll', handleScroll),
        1000
      );
    }
  }, [
    activeScrollY,
    baseWidth,
    handleScroll,
    isAppearFromBottom,
    scrollActive,
  ]);

  return (
    <WaveBoxContainer style={{ transform: `translateX(${translateX}px)` }}>
      <SkillIcons datas={logoArr} />
    </WaveBoxContainer>
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

  const FEtitleEl = useRef();
  const [scrollActive, setScrollActive] = useState(false);
  const [activeScrollY, setActiveScrollY] = useState();
  const [isAppearFromBottom, setIsAppearFromBottom] = useState(true);

  const handleScroll = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setScrollActive(true);
      setActiveScrollY(window.scrollY);
      if (entry.intersectionRect.top >= window.innerHeight * 0.5) {
        setIsAppearFromBottom(true);
      } else {
        setIsAppearFromBottom(false);
      }
    } else {
      setScrollActive(false);
    }
  }, []);

  useEffect(() => {
    const { current } = FEtitleEl;

    let observer;
    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0,
      });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return (
    <IconsWaveContainer>
      <li ref={FEtitleEl}>
        <p>프론트엔드</p>
        <WaveBox
          scrollActive={scrollActive}
          activeScrollY={activeScrollY}
          isAppearFromBottom={isAppearFromBottom}
          logoArr={logoArr1}
        />
      </li>
      <li>
        <p>상태관리 라이브러리, CSS</p>
        <WaveBox
          scrollActive={scrollActive}
          activeScrollY={activeScrollY}
          isAppearFromBottom={isAppearFromBottom}
          logoArr={logoArr2}
        />
      </li>
      <li>
        <p>백엔드, 협업 툴</p>
        <WaveBox
          scrollActive={scrollActive}
          activeScrollY={activeScrollY}
          isAppearFromBottom={isAppearFromBottom}
          logoArr={logoArr3}
        />
      </li>
    </IconsWaveContainer>
  );
}

