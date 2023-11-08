import styled from '@emotion/styled';
import React from 'react';
import Title from '../text/Title';
import { projectData } from '../../data/projects';
import NewProjectItem from './NewProjectItem';

const NewProjectsContainer = styled.section`
  & > div.inner {
  }
`;

export default function NewProjects() {
  return (
    <NewProjectsContainer>
      <Title name='프로젝트' />
      <div className='inner'>
        {projectData &&
          projectData.map((data, idx) => (
            <NewProjectItem key={`${data.id}-${idx}`} data={data} />
          ))}
        {/* <div className='projectWrapper'>
          <div className='imgWrapper'>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <img src='' alt='' />
            </div>
          </div>
          <div className='desWrapper'> */}
        {/* <ul className={data.team ? 'team' : 'side'}>
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
            </ul> */}
        {/* </div>
        </div> */}
      </div>
    </NewProjectsContainer>
  );
}

