import styled from '@emotion/styled';
import React from 'react';
import useScrollTopFix from '../../hooks/useScrollTopFix';
import { css } from '@emotion/react';

const TitleContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.tititle};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  display: inline-block;
  ${({ hasSub }) =>
    hasSub &&
    css`
      &::after {
        content: '각 프로젝트 우측상단 detail을 통해 세부사항을 확인하실 수 있습니다.';
        display: block;
      }
    `}
  &::after {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.base};
    color: ${({ theme }) => theme.textColor.lightGray};
  }
  &.sticky {
    &::after {
      display: inline-block;
      margin-left: 15px;
    }
  }
  &.static {
    &::after {
      display: block;
      margin-top: 15px;
    }
  }
`;

export default function Title({ name, hasSub }) {
  const topFix = useScrollTopFix();
  return (
    <TitleContainer {...topFix} hasSub={hasSub}>
      {name}
    </TitleContainer>
  );
}

