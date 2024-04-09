import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef } from 'react';
import SkillIcons from '../skills/SkillIcons';
import { VscCircle } from 'react-icons/vsc';
import MoveToButton from '../buttons/MoveToButton';
import useModal from '../../hooks/useModal';
import ProjectModal from '../modal/ProjectModal';
import { keyframes } from '@emotion/react';
import useScrollNav from '../../hooks/useScrollNav';

const upDownKeyFrames = keyframes`
  0% {
    /* transform: scale(1.02); */
     transform:translateY(-7px);
     /* box-shadow: 1px 1px 15px rgba(193, 193, 193, 0.498); */
    }
    100% {
      /* transform: scale(1); */
      /* box-shadow: 1px 1px 5px rgba(127, 127, 127, 0.5); */
     transform:translateY(0px);
  }
`;

const ProjectItemWrapper = styled.li`
  /* border: 1px solid red; */
  width: 100%;
  height: 100vh;
  padding: 60px 0;
  & > div.justOuterForNavContext {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 70px;
    & > div.imgWrapper {
      flex: 3.5;
      display: flex;
      flex-direction: column;
      gap: 15px;
      height: 90%;
      &.app {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 15px;
      }
      & > div {
        flex: 1;
        width: 100%;
        /* height: 100%; */
        overflow: hidden;
        /* box-shadow: ${({ theme }) => theme.shadowColor}; */
        display: flex;
        justify-content: center;
        align-items: center;
        & > div {
          height: 100%;
          & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border: ${({ theme }) => `0.7px solid ${theme.lineColor}`};
            border-radius: 15px;
          }
        }
      }
      &.app > div {
        flex: 1;
        height: 100%;
        display: flex;
        &.firstImg {
          justify-content: flex-end;
        }
        &.secondImg {
          justify-content: flex-start;
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
        & > li.detailBtnWrapper {
          position: relative;
          & > div {
            width: 50px;
            height: 40px;
            & > div {
              position: absolute;
              animation: ${upDownKeyFrames} 0.3s ease-in alternate infinite;
            }
          }
        }
      }
      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 40px;
        & > div {
          & > h1 {
            color: ${({ theme }) => theme.textColor.primary};
            font-weight: ${({ theme }) => theme.fontWeight.bold};
            font-size: ${({ theme }) => theme.fontSize.subTitle};
            margin-bottom: 15px;
          }
          & > div.mobileImgWrapper {
            display: none;
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
            font-size: ${({ theme }) => theme.fontSize.small};
            margin-top: 12px;
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
              font-size: ${({ theme }) => theme.fontSize.base};
              & > i {
                font-size: 12px;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 70px 0px;
    & > div.justOuterForNavContext {
      & > div.imgWrapper {
        display: none;
      }
      & > div.desWrapper {
        position: relative;
        height: 100%;
        & > ul.moveToWrapper {
          position: absolute;
          top: 0;
          right: 0;
        }
        & > div {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 25px;
          & > div {
            width: 100%;
            & > h1 {
            }
            & > div.mobileImgWrapper {
              display: block;
              width: 100%;
              height: auto;
              margin: 25px 0px;
              & > img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            }
            & > h3 {
              margin-bottom: 12px;
            }
            & > span {
              margin-top: 10px;
            }
            & > p {
              margin-bottom: 12px;
            }
            & > ul.des {
              gap: 10px;
              & > li {
                font-size: ${({ theme }) => theme.fontSize.small};
              }
            }
          }
        }
      }
    }
  }
`;

export default function ProjectItem({ data, idx }) {
  const [openModal, onOpenModal, onCloseModal] = useModal();
  const nav = useScrollNav(data.nav);
  const projectOuterRef = useRef();

  const scrollHandler = useCallback(([entry]) => {
    const { current: outerRef } = projectOuterRef;
    if (entry.isIntersecting) {
      window.scrollTo({ top: outerRef.offsetTop, behavior: 'smooth' });
      setTimeout(() => {
        // 스크롤이 딱 안맞는 경우가 있어서 맞춰주기
        if (window.scrollY !== outerRef.offsetTop) {
          window.scrollTo({ top: outerRef.offsetTop, behavior: 'smooth' });
        }
      }, 700);
    }
  }, []);

  useEffect(() => {
    const { current } = projectOuterRef;

    let observer;
    if (current) {
      observer = new IntersectionObserver(scrollHandler, {
        threshold: 0.3,
      });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [scrollHandler]);
  return (
    <ProjectItemWrapper ref={idx === 0 ? projectOuterRef : undefined}>
      <div className='justOuterForNavContext' {...nav}>
        <div className={`imgWrapper${data.app ? ' app' : ''}`}>
          <div className='firstImg'>
            <div>
              <img src={data.src1} alt={data.alt1} />
            </div>
          </div>
          <div className='secondImg'>
            <div>
              <img src={data.src2} alt={data.alt2} />
            </div>
          </div>
        </div>
        <div className='desWrapper'>
          <ul className='moveToWrapper'>
            <li className='detailBtnWrapper'>
              <div>
                <MoveToButton detail={true} onOpenModal={onOpenModal} />
              </div>
            </li>
            <li>
              <MoveToButton github={true} link={data.gitLink} />
            </li>
          </ul>
          <div>
            <div>
              <h1>{data.title}</h1>
              <div className='mobileImgWrapper'>
                <img src={data.app ? data.src3 : data.src1} alt={data.alt1} />
              </div>
              <h3>{data.subTitle}</h3>
              <span>기간 : {data.date}</span>
              <span>인원 : {data.member}</span>
              <span>기여도 : {data.percent}</span>
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
      </div>
    </ProjectItemWrapper>
  );
}

