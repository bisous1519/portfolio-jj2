import React from 'react';
import ModalLayout from './ModalLayout';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import styled from '@emotion/styled';

const ProjectModalContainer = styled.section`
  width: 80vw;
  height: 70vh;
  .toastui-editor-contents {
    h1,
    h2,
    h3,
    p {
      color: ${({ theme }) => theme.textColor.initial};
    }
    a {
      color: ${({ theme }) => theme.textColor.primary};
      &:hover {
        color: ${({ theme }) => theme.textColor.lightGray};
      }
    }
    strong {
      color: ${({ theme }) => theme.textColor.primary};
      font-weight: ${({ theme }) => theme.fontWeight.bolder};
    }
  }
`;

export default function ProjectModal({ data, onCloseModal }) {
  return (
    <ModalLayout onCloseModal={onCloseModal}>
      <ProjectModalContainer>
        <Viewer initialValue={data} />
      </ProjectModalContainer>
    </ModalLayout>
  );
}

