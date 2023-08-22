import styled from '@emotion/styled';
import React, { useRef } from 'react';
import Title from '../text/Title';
import IconsWave from '../skills/IconsWave';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import skillData from '../../data/skills';
import NewSkillCard from '../skills/NewSkillCard';
import SkillsContents from '../skills/SkillsContents';

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

const SkillsContainer = styled.section``;

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
                data.map((skill) => (
                  <NewSkillCard key={skill.id} data={skill} />
                ))}
            </div>
          </div>
        ))}
    </SkillsInnerlContainer>
  );
}

export default function NewSkills() {
  const { frontendSkills, etcSkills } = skillData;

  return (
    <SkillsContainer>
      <Title name='사용할 수 있는 기술스택 입니다' />
      <IconsWave />
      <SkillsContents name='프론트엔드' data={frontendSkills} />
      <SkillsContents name='그 외' data={etcSkills} />
      {/* <SkillsInner /> */}
    </SkillsContainer>
  );
}

