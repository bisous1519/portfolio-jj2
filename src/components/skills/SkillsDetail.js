import styled from '@emotion/styled';
import skillData from '../../data/skills';

const SkillCardsBox = styled.article`
  position: relative;
  /* border: 1px solid red; */
  break-inside: avoid;
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadowColor};
  & + article {
    margin-top: 40px;
  }
  & > span {
    position: absolute;
    top: -10px;
    left: 0px;
    background-color: ${({ theme }) => theme.background}; // 지울거임 지워
  }
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    & > li {
    }
  }
`;
const SkillsDetailContainer = styled.div`
  & > p {
    margin-bottom: 40px;
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    color: ${({ theme }) => theme.textColor.primary};
  }
  & > div.cardsOuter {
    columns: 2;
    gap: 30px;
  }
`;

function SkillCard({ data }) {
  return (
    <SkillCardsBox>
      <span>{data.name}</span>
      <ul>
        {data.des.map((line, idx) => (
          <li key={`${data.id}-${idx}`}>{line}</li>
        ))}
      </ul>
    </SkillCardsBox>
  );
}

export default function SkillsDetail() {
  const { frontendSkills, backendSkills, dbSkills, toolsSkills } = skillData;
  return (
    <SkillsDetailContainer>
      <p>Frontend</p>
      <div className='cardsOuter'>
        {frontendSkills &&
          frontendSkills.map((skill) => (
            <SkillCard key={skill.id} data={skill} />
          ))}
      </div>
    </SkillsDetailContainer>
  );
}

