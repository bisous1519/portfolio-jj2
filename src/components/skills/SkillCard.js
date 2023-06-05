import styled from '@emotion/styled';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const SkillCardsBox = styled.article`
  /* border: 1px solid red; */
  break-inside: avoid;
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadowColor};
  /* margin: 40px 0px; */
  margin-bottom: 40px;
  & > p {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 15px;
    color: ${({ theme }) => theme.textColor.primary};
  }
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    & > li {
      line-height: 20px;
    }
  }
`;

export default function SkillCard({ data }) {
  const fadeinAnimation = useScrollFadeIn();
  return (
    <SkillCardsBox {...fadeinAnimation}>
      <p>{data.name}</p>
      <ul>
        {data.des.map((line, idx) => (
          <li key={`${data.id}-${idx}`}>{line}</li>
        ))}
      </ul>
    </SkillCardsBox>
  );
}

