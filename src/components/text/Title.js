import styled from '@emotion/styled';
import React from 'react';
import useScrollVisible from '../../hooks/useScrollVisible';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import useScrollTopFix from '../../hooks/useScrollTopFix';

const TitleContainer = styled.div`
  /* &.invisible {
    opacity: 0%;
    transform: translateY(15px);
  }
  opacity: 100%;
  transform: translateY(0px);
  transition: all ease-in-out 0.2s !important; */
  margin-bottom: 50px;
  /* color: ${({ theme }) => theme.textColor.primary}; */
  font-size: ${({ theme }) => theme.fontSize.title};
  /* font-weight: ${({ theme }) => theme.fontWeight.bold}; */
  /* &::after {
    content: '';
    display: block;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.textColor.lightGray};
    margin-top: 5px;
    box-shadow: ${({ theme }) => theme.shadowColor};
  } */
`;

export default function Title({ name }) {
  const fadeInAnimation = useScrollFadeIn();
  const topFix = useScrollTopFix();
  return (
    <TitleContainer {...fadeInAnimation} {...topFix}>
      {name}
    </TitleContainer>
  );
}

