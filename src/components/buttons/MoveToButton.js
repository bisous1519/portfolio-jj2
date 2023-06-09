import styled from '@emotion/styled';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { HiMiniMagnifyingGlassPlus } from 'react-icons/hi2';

const MoveToButtonBox = styled.div`
  width: 50px;
  height: 40px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.textColor.lightGray};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadowColor};
  over-flow: hidden;
  cursor: pointer;
  & > i {
    color: ${({ theme }) => theme.textColor.lightPrimary};
  }
  & > span {
    color: ${({ theme }) => theme.textColor.lightGray};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export default function MoveToButton({ github, detail, link }) {
  const onClick = () => {
    window.location.href = link;
  };
  return (
    <MoveToButtonBox onclick={onClick}>
      {github ? (
        <>
          <i style={{ fontSize: '18px' }}>
            <FiGithub />
          </i>
          <span>github</span>
        </>
      ) : (
        <>
          <i style={{ fontSize: '20px' }}>
            <HiMiniMagnifyingGlassPlus />
          </i>
          <span>detail</span>
        </>
      )}
    </MoveToButtonBox>
  );
}

