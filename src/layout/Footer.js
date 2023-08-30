import React, { useEffect, useState } from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  width: 100%;
  height: 30px;
  margin: 150px 0px 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.textColor.lightGray};
  span {
    padding: 0 7px;
    & + span {
      border-left: 1px solid ${({ theme }) => theme.textColor.lightGray};
    }
    &:first-child {
      word-spacing: 3px;
    }
  }
  & > span:first-child {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export default function Footer() {
  const [year, setYear] = useState();
  const getYear = () => {
    setYear(new Date().getFullYear());
  };
  useEffect(() => {
    getYear();
  }, []);
  return (
    <FooterContainer>
      <span>
        Copyright <AiOutlineCopyrightCircle /> {year}
      </span>
      <span>JangEomji</span>
      <span>All Rights Reserved</span>
    </FooterContainer>
  );
}

