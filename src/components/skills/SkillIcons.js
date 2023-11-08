import styled from '@emotion/styled';
import React from 'react';

const SkillIconsBox = styled.ul`
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
`;

export default function SkillIcons({ datas }) {
  return (
    <SkillIconsBox>
      {datas.length > 0 &&
        datas.map((data, idx) => (
          <li key={`iconitem-${idx}`}>
            <img src={data.src} alt={data.alt} />
          </li>
        ))}
    </SkillIconsBox>
  );
}

