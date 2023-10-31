import styled from '@emotion/styled';
import React from 'react';
import useScroll from '../../hooks/useScroll';

const TitleContainer = styled.div`
  &.invisible {
    opacity: 0%;
  }
  opacity: 100%;
  transition: opacity ease-in-out 0.2s !important;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.textColor.primary};
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  /* &::after {
    content: '';
    display: block;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.textColor.lightGray};
    margin-top: 5px;
    box-shadow: ${({ theme }) => theme.shadowColor};
  } */
`;

export default function Title({ name, visiblePoint }) {
  const visible = useScroll(visiblePoint);
  return (
    <TitleContainer className={visible ? 'visible' : 'invisible'}>
      {name}
    </TitleContainer>
  );
}

