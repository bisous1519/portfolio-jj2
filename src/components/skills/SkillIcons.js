import styled from '@emotion/styled';
import React from 'react';

const SkillIconsBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  & > li {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadowColor};
    /* cursor: pointer; */
    & > div {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    & > span {
      position: absolute;
      left: 50%;
      bottom: -24px;
      transform: translateX(-50%);
      font-size: ${({ theme }) => theme.fontSize.small};
      background-color: ${({ theme }) => theme.textColor.gray};
      color: ${({ theme }) => theme.textColor.reverse};
      padding: 3px 5px 4px 5px;
      border-radius: 5px;
      opacity: 0;
      transition: opacity 0.2s;
      white-space: nowrap;
    }
    &:hover {
      & > span {
        opacity: 1;
      }
    }
  }
`;

export default function SkillIcons({ datas }) {
  return (
    <SkillIconsBox className='skillIcons'>
      {datas.length > 0 &&
        datas.map((data, idx) => (
          <li key={`iconitem-${idx}`}>
            <div>
              <img src={data.src} alt={data.alt} />
            </div>
            <span>{data.des}</span>
          </li>
        ))}
    </SkillIconsBox>
  );
}

