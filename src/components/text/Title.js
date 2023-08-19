import styled from '@emotion/styled';
import React from 'react';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import useScrollTopFix from '../../hooks/useScrollTopFix';

const TitleContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.tititle};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  display: inline-block;
`;

export default function Title({ name }) {
  // const fadeInAnimation = useScrollFadeIn();
  const topFix = useScrollTopFix();
  return (
    // <TitleContainer {...fadeInAnimation} {...topFix}>
    <TitleContainer {...topFix}>{name}</TitleContainer>
  );
}

