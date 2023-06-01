import styled from '@emotion/styled';
import React, { useRef } from 'react';
import Title from '../text/Title';
import { JSlogo, Nextjslogo, Reactlogo, Reduxlogo } from '../../assets/icons';
import IconsWave from '../skills/IconsWave';

const SkillsContainer = styled.section`
  overflow: hidden;
  & > div.inner {
  }
`;

export default function NewSkills() {
  const halfInnerW = useRef(Math.floor(window.innerWidth / 2));

  return (
    <SkillsContainer halfInnerW={halfInnerW}>
      <Title name='기술스택' visiblePoint={30} />
      <div className='inner'>
        <IconsWave halfInnerW={halfInnerW} />
      </div>
    </SkillsContainer>
  );
}

