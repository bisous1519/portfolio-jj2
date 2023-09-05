import styled from '@emotion/styled';
import React, { useRef } from 'react';
import Title from '../text/Title';
import IconsWave from '../skills/IconsWave';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import skillData from '../../data/skills';
import NewSkillCard from '../skills/NewSkillCard';
import SkillsContents from '../skills/SkillsContents';

const SkillsContainer = styled.section``;

export default function NewSkills() {
  const { frontendSkills, etcSkills } = skillData;

  return (
    <SkillsContainer>
      <Title name='사용할 수 있는 기술스택 입니다' />
      <IconsWave />
      <SkillsContents isFrontend={true} data={frontendSkills} />
      <SkillsContents isFrontend={false} data={etcSkills} />
    </SkillsContainer>
  );
}

