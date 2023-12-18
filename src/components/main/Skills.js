import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Title from '../text/Title';
import IconsWave from '../skills/IconsWave';
import skillData from '../../data/skills';
import SkillsContents from '../skills/SkillsContents';
import useScrollNav from '../../hooks/useScrollNav';

const SkillsContainer = styled.section``;

export default function Skills() {
  const nav = useScrollNav('skills');
  const { frontendSkills, etcSkills } = skillData;

  return (
    <SkillsContainer {...nav}>
      <Title name='사용할 수 있는 기술스택 입니다' />
      <IconsWave />
      <SkillsContents isFrontend={true} data={frontendSkills} />
      <SkillsContents isFrontend={false} data={etcSkills} />
    </SkillsContainer>
  );
}

