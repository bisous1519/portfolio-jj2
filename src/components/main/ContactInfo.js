import React from 'react';
import contact from '../../data/contact';
import styled from '@emotion/styled';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';
import { RxCopy } from 'react-icons/rx';

const ContactInfoBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 180px;
  & > a {
    & + a {
      margin-top: 11px;
    }
    & > li {
      display: flex;
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.textColor.initial};
      i {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 8px;
        color: ${({ theme }) => theme.textColor.primary};
      }
      &:hover {
        color: ${({ theme }) => theme.textColor.primary};
      }
    }
  }
`;

export default function ContactInfo() {
  return (
    <ContactInfoBox>
      {contact &&
        contact.map((v) => (
          <a key={v.id} href={v.href} target={v.target} rel={v.rel}>
            <li>
              <i>{v.icon}</i>
              {v.contact}
              {v.moveIcon && (
                <i>
                  <HiOutlineArrowRightCircle />
                </i>
              )}
              <i>
                <RxCopy />
              </i>
            </li>
          </a>
        ))}
    </ContactInfoBox>
  );
}

