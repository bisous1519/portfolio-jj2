import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import Title from '../text/Title';
import { JSlogo, Nextjslogo, Reactlogo, Reduxlogo } from '../../assets/icons';
import useScroll from '../../hooks/useScroll';
import throttle from 'lodash.throttle';

const SkillsContainer = styled.section`
  & > div {
    & > ul.iconsWave {
      &.invisible {
        opacity: 0;
      }
      opacity: 1;
      transition: opacity 0.3s;
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
  }
`;

export default function NewSkills() {
  const iconsWaveVisible = useScroll(45);
  const iconsWaveEl = useRef();

  const moveIconsWave = throttle(() => {
    // window.scrollY
  }, 300);

  useEffect(() => {
    window.addEventListener('scroll', moveIconsWave());
  }, []);

  return (
    <SkillsContainer>
      <Title name='기술스택' visiblePoint={30} />
      <div>
        <ul
          className={`iconsWave ${iconsWaveVisible ? 'visible' : 'invisible'}`}
          ref={iconsWaveEl}
        >
          <li>
            <img src={JSlogo} alt='Javascript logo' />
          </li>
          <li>
            <img src={Nextjslogo} alt='Nextjs logo' />
          </li>
          <li>
            <img src={Reactlogo} alt='React logo' />
          </li>
          <li>
            <img src={Reduxlogo} alt='Redux logo' />
          </li>
        </ul>
      </div>
    </SkillsContainer>
  );
}

