import styled from '@emotion/styled';
import React from 'react';

const TitleContainer = styled.div`
  color: ${({ theme }) => theme.textColor.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default function Title({ name }) {
  return <TitleContainer>{name}</TitleContainer>;
}

