import styled from '@emotion/styled';
import React from 'react';
import SkillIcons from '../skills/SkillIcons';
import { VscCircle, VscGithub } from 'react-icons/vsc';
import { HiOutlineMagnifyingGlassPlus } from 'react-icons/hi2';
import { IoLogoGithub, IoIosArrowForward } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import MoveToButton from '../buttons/MoveToButton';
import useModal from '../../hooks/useModal';
import ProjectModal from '../modal/ProjectModal';

const ProjectItemWrapper = styled.div`
  /* border: 1px solid red; */
  height: 100vh;
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
  & > div.imgWrapper {
    &.app {
      flex-direction: row;
    }
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 3.5;
    /* max-height: 80vh; */
    & > div {
      flex: 1;
      width: 100%;
      /* height: 100%; */
      border-radius: 15px;
      overflow: hidden;
      border: 0.7px solid #d9d9d9;
      /* box-shadow: ${({ theme }) => theme.shadowColor}; */
      & > img {
        width: 100%;
        /* height: 100%; */
      }
    }
  }
  & > div.desWrapper {
    flex: 2;
    min-width: 300px;
    & > ul.moveToWrapper {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      margin-bottom: 20px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 35px;
      & > div {
        & > h1 {
          color: ${({ theme }) => theme.textColor.primary};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          font-size: ${({ theme }) => theme.fontSize.subTitle};
          margin-bottom: 15px;
        }
        & > h3 {
          color: ${({ theme }) => theme.textColor.initial};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          font-size: ${({ theme }) => theme.fontSize.xl};
          margin-bottom: 15px;
        }
        & > span {
          display: block;
          color: ${({ theme }) => theme.textColor.gray};
          font-size: ${({ theme }) => theme.fontSize.base};
          margin-bottom: 20px;
        }
        & > p {
          color: ${({ theme }) => theme.textColor.initial};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
          font-size: ${({ theme }) => theme.fontSize.lg};
          margin-bottom: 15px;
        }
        & > ul.des {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 15px;
          & > li {
            & > i {
              font-size: 12px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
`;

export default function NewProjectItem({ data }) {
  const [openModal, onOpenModal, onCloseModal] = useModal();

  return (
    <ProjectItemWrapper>
      <div className={`imgWrapper${data.app ? ' app' : ''}`}>
        <div>
          <img src={data.src1} alt={data.alt1} />
        </div>
        <div>
          <img src={data.src2} alt={data.alt2} />
        </div>
      </div>
      <div className='desWrapper'>
        <ul className='moveToWrapper'>
          <li>
            <MoveToButton github={true} link={data.gitLink} />
          </li>
          <li>
            <MoveToButton detail={true} onOpenModal={onOpenModal} />
          </li>
        </ul>
        <div>
          <div>
            <h1>{data.title}</h1>
            <h3>{data.subTitle}</h3>
            <span>( {data.date} )</span>
            {/* <div style={{ display: 'flex', gap: '15px' }}>
              <MoveToButton github={true} link={data.gitLink} />
              <MoveToButton detail={true} />
            </div> */}
          </div>
          <div>
            <p>맡은 역할</p>
            <ul className='des'>
              {data.des.map((el, idx) => (
                <li key={`${data.id}-des-${idx}`}>
                  <i>
                    <VscCircle />
                  </i>
                  {el}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Frontend</p>
            <SkillIcons datas={data.skills} />
          </div>
        </div>
      </div>
      {openModal && (
        <ProjectModal data={data.detail} onCloseModal={onCloseModal} />
      )}
    </ProjectItemWrapper>
  );
}

