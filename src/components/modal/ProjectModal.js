import React from 'react';
import ModalLayout from './ModalLayout';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import styled from '@emotion/styled';

const ProjectModalContainer = styled.section`
  /* border: 1px solid red; */
  width: 70vw;
  height: 80vh;
  padding: 0px 50px !important;
  .toastui-editor-contents {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.title};
      font-weight: ${({ theme }) => theme.fontWeight.bolder};
      color: ${({ theme }) => theme.textColor.initial};
    }
    h2 {
      font-size: ${({ theme }) => theme.fontSize.subTitle};
      font-weight: ${({ theme }) => theme.fontWeight.bolder};
      color: ${({ theme }) => theme.textColor.initial};
      border-bottom: 1px solid ${({ theme }) => theme.projectModal.etcLine};
      margin-top: 55px;
      margin-bottom: 25px;
      padding-bottom: 14px;
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.textColor.initial};
      margin-top: 55px;
      &:nth-of-type(1) {
        margin-top: 55px;
        margin-bottom: 2px;
      }
      &:nth-of-type(2) {
        margin-top: 9px;
        margin-bottom: 30px;
        margin-left: 11px;
      }
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.textColor.initial};
      margin: 18px 0;
      line-height: 1.7;
    }
    ul {
      & > li {
        &::before {
          margin-top: 10px;
        }
        & > p {
          margin: 10px 0;
        }
      }
    }
    table,
    thead,
    tr,
    th,
    tbody,
    td {
      border: none;
    }
    table {
      th,
      td {
        background: none;
        font-size: ${({ theme }) => theme.fontSize.small};
        line-height: 1.4;
        color: ${({ theme }) => theme.textColor.gray};
        vertical-align: middle;
        text-align: left;
        padding: 10px 7px 10px 14px;
      }
      th {
        padding-top: 0;
      }
      tr:last-of-type > td {
        padding-bottom: 0;
      }
      tr {
        font-size: ${({ theme }) => theme.fontSize.small};
        line-height: 1.4;
        color: ${({ theme }) => theme.textColor.gray};
        img {
          width: 30px;
          height: 30px;
          object-fit: cover;
          border-radius: 10px;
          margin: 0;
          box-shadow: ${({ theme }) => theme.shadowColor};
        }
      }
    }
    blockquote {
      margin: 40px 0;
      border-left: 4px solid ${({ theme }) => theme.projectModal.quoteLine};
      & > p {
        color: ${({ theme }) => theme.textColor.gray};
        line-height: 1.8;
      }
    }
    a {
      color: ${({ theme }) => theme.textColor.primary};
      &:hover {
        color: ${({ theme }) => theme.textColor.lightPrimary};
      }
    }
    strong {
      /* color: ${({ theme }) => theme.textColor.primary}; */
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
    del {
      text-decoration: none;
      background: ${({ theme }) => theme.projectModal.summaryBackground};
      padding: 15px;
      border-radius: 10px;
      color: ${({ theme }) => theme.textColor.initial};
      display: inline-block;
      margin-top: 5px;
      & > strong {
        &::after {
          content: '';
          border: 1px solid ${({ theme }) => theme.projectModal.summaryAfter};
          margin: 0px 13px;
        }
      }
    }
    p:first-of-type {
      & > img {
        max-height: 280px;
        display: block;
        margin: 40px auto;
      }
    }
    img {
      max-height: 200px;
      display: block;
      margin: 0 auto;
      margin-top: 55px;
      border: 1px solid ${({ theme }) => theme.lineColor};
      border-radius: 10px;
    }
    div > div > img {
      max-height: 300px;
      display: block;
      margin: 0 auto;
      margin-top: 55px;
      border: 1px solid ${({ theme }) => theme.lineColor};
      border-radius: 10px;
    }
    h3 + p,
    h3 + div > div {
      & > img {
        margin-top: 30px;
      }
    }
    hr {
      margin: 40px 0;
      border: 1px solid ${({ theme }) => theme.projectModal.topLine};
    }
  }
`;

export default function ProjectModal({ data, onCloseModal }) {
  return (
    <ModalLayout icon={data.icon} title={data.name} onCloseModal={onCloseModal}>
      <ProjectModalContainer>
        <Viewer initialValue={data.text} />
      </ProjectModalContainer>
    </ModalLayout>
  );
}

