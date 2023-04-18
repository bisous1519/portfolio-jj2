import React from 'react';
import { AiOutlineZoomIn } from 'react-icons/ai';
import useModal from '../../hooks/useModal';
import ProjectModal from '../modal/ProjectModal';
import styled from '@emotion/styled';

const ProjectItemContainer = styled.li`
  & > h4 {
    line-height: 50px;
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.textColor.primary};
  }
  & > article {
    display: flex;
    & > div {
      position: relative;
      width: 400px;
      height: 260px;
      & > img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
      & > div {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${({ theme }) => theme.fontSize.lg};
        color: ${({ theme }) => theme.textColor.light};
        background-color: ${({ theme }) => theme.layerColor};
        opacity: 0;
        transition: opacity 0.2s;
        cursor: pointer;
        p {
          margin-left: 10px;
        }
        &:hover,
        &:active {
          opacity: 1;
        }
      }
    }
    & > ul {
      &.team {
        margin: 40px 0 40px 50px;
      }
      &.side {
        margin: 55px 0 55px 50px;
      }
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      & > li {
        display: flex;
        align-items: center;
        font-size: ${({ theme }) => theme.fontSize.base};
        color: ${({ theme }) => theme.textColor.initial};
        span {
          width: 72px;
          text-align: justify;
          text-align-last: justify;
        }
        p {
          padding-left: 20px;
          margin-left: 20px;
          border-left: 1px solid ${({ theme }) => theme.textColor.lightGray};
          a {
            color: ${({ theme }) => theme.textColor.primary};
            text-decoration: underline;
            &:hover {
              color: ${({ theme }) => theme.textColor.lightGray};
            }
          }
        }
        & > ul {
          padding-left: 20px;
          margin-left: 20px;
          border-left: 1px solid ${({ theme }) => theme.textColor.lightGray};
          display: flex;
          justify-content: center;
          li {
            img {
              height: 23px;
              object-fit: cover;
            }
            & + li {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    & > h4 {
    }
    & > article {
      flex-direction: column;
      & > div {
        width: 100%;
        height: 162px;
        & > img {
        }
        & > div {
          opacity: 0.7;
          &:hover,
          &:active {
            opacity: 1;
          }
        }
      }
      & > ul {
        width: 100%;
        margin: 20px 0 0 0;
        justify-content: initial;
        li {
          line-height: 20px;
          span {
            width: 72px;
          }
          p {
            a {
            }
          }
        }
      }
    }
  }
`;

export default function ProjectItem({ data }) {
  const [openModal, onOpenModal, onCloseModal] = useModal();
  return (
    <ProjectItemContainer>
      <h4>{data.title}</h4>
      <article>
        <div>
          <img src={data.src} alt={data.alt} />
          <div onClick={onOpenModal}>
            <AiOutlineZoomIn />
            <p>자세히 보기</p>
          </div>
        </div>
        <ul className={data.team ? 'team' : 'side'}>
          <li>
            <span>기간</span>
            <p>{data.date}</p>
          </li>
          {data.team && (
            <li>
              <span>팀원</span>
              <p>{data.team}</p>
            </li>
          )}
          <li>
            <span>사이트</span>
            <p>
              <a href={data.siteHref} target='_blank' rel='noreferrer'>
                {data.siteP}
              </a>
            </p>
          </li>
          <li>
            <span>깃허브</span>
            <p>
              <a href={data.gitHref} target='_blank' rel='noreferrer'>
                {data.gitP}
              </a>
            </p>
          </li>
          <li>
            <span>FE 기술스택</span>
            <ul>
              {data.skills &&
                data.skills.map((v) => (
                  <li key={v.id}>
                    <img src={v.src} alt={v.alt} />
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </article>
      {openModal && <ProjectModal data={data} onCloseModal={onCloseModal} />}
    </ProjectItemContainer>
  );
}

