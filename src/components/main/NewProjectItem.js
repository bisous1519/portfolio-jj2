import styled from '@emotion/styled';
import React from 'react';

const ProjectItemWrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div.imgWrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    & > div {
      flex: 1;
      width: 100%;
      border-radius: 15px;
      overflow: hidden;
      & > img {
        width: 100%;
      }
    }
  }
  & > div.desWrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 15px;
    & > h3 {
    }
    & > span {
    }
    & > ul.des {
      & > li {
      }
    }
    & > p {
    }
    & > ul.skills {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 30px;
      & > li {
        width: 30px;
        height: 100%;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export default function NewProjectItem({ data }) {
  return (
    <ProjectItemWrapper>
      <div className='imgWrapper'>
        <div>
          <img src={data.src1} alt={data.alt1} />
        </div>
        <div>
          <img src={data.src2} alt={data.alt2} />
        </div>
      </div>
      <div className='desWrapper'>
        <h3>{data.subTitle}</h3>
        <span>{data.date}</span>
        <ul className='des'>
          {data.des.map((el, idx) => (
            <li key={`${data.id}-des-${idx}`}>{el}</li>
          ))}
        </ul>
        <p>Frontend</p>
        <ul className='skills'>
          {data.skills.map((el, idx) => (
            <li key={`${data.id}-skills-${idx}`}>
              <img src={el} alt='logo' />
            </li>
          ))}
        </ul>
      </div>
    </ProjectItemWrapper>
  );
}

