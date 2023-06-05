import styled from '@emotion/styled';
import React, { useRef } from 'react';
import Title from '../text/Title';
import { JSlogo, Nextjslogo, Reactlogo, Reduxlogo } from '../../assets/icons';
import IconsWave from '../skills/IconsWave';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import SkillCard from '../skills/SkillCard';
import skillData from '../../data/skills';

const SkillsInnerlContainer = styled.div`
  & > div {
    margin-bottom: 40px;
    & > p.subTitle {
      margin-bottom: 40px;
      font-size: ${({ theme }) => theme.fontSize.subTitle};
      /* color: ${({ theme }) => theme.textColor.primary}; */
    }
    & > div.cardsOuter {
      columns: 2;
      gap: 30px;
    }
  }
`;

const SkillsContainer = styled.section`
  /* overflow: hidden; */
  & > div.inner {
  }
`;

function SkillsInner() {
  const fadeinAnimation = useScrollFadeIn();

  const { frontendSkills, backendSkills, toolsSkills } = skillData;
  const datas = [
    { name: '프론트엔드', data: frontendSkills },
    { name: '백엔드', data: backendSkills },
    { name: '협업툴', data: toolsSkills },
  ];

  return (
    <SkillsInnerlContainer>
      {skillData &&
        datas &&
        datas.map(({ name, data }) => (
          <div>
            <p className='subTitle'>{name}</p>
            <div className='cardsOuter'>
              {data &&
                data.map((skill) => <SkillCard key={skill.id} data={skill} />)}
            </div>
          </div>
        ))}
    </SkillsInnerlContainer>
  );
}

export default function NewSkills() {
  return (
    <SkillsContainer>
      <Title name='기술스택' />
      <div className='inner'>
        <IconsWave />
        <SkillsInner />
      </div>
    </SkillsContainer>
  );
}

