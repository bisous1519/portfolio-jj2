import {
  maliconLanding,
  maliconMain,
  maliconLoading,
  eeumMain,
  eeumDiary,
  ssafastMain,
  ssafastPJMain,
} from '../assets/img';
import {
  maliconDetail,
  eeumDetail,
  ssafastDetail,
} from '../data/projectDetail';
import skillLogo from './skillLogo';

const {
  js,
  nextjs,
  react,
  redux,
  reduxToolkit,
  sass,
  styledComponent,
  ts,
  vue,
  reactNative,
  recoil,
  emotion,
  tailwind,
  reactQuery,
  java,
} = skillLogo;

export const projectData = [
  {
    id: 'teampjt-1',
    title: 'MALICON',
    subTitle: '아바타로 소통하는 실시간 방송 플랫폼',
    date: '23.02 - 23.03',
    gitLink: 'https://github.com/bisous1519/malicon',
    detail: maliconDetail,
    des: [
      '공통 컴포넌트 제작',
      '랜딩 페이지 구현',
      '메인 페이지 구현',
      '로딩 페이지 구현',
      '실시간 반응 및 채팅 구현',
      '메인 페이지 무한 스크롤 구현',
    ],
    src1: maliconLanding,
    src2: maliconMain,
    alt1: 'malicon landing page',
    alt2: 'malicon main page',
    skills: [react, ts, reduxToolkit, emotion],
  },
  {
    id: 'teampjt-2',
    title: '이음',
    subTitle: '자립준비청년의 자립을 돕는 파트너',
    date: '23.03 - 23.04',
    gitLink: 'https://github.com/bisous1519/E-Eum',
    detail: eeumDetail,
    des: ['공통 컴포넌트 제작', '다이어리 페이지 구현', '관리자 페이지 구현'],
    app: true,
    src1: eeumMain,
    src2: eeumDiary,
    alt1: 'malicon landing page',
    alt2: 'malicon main page',
    skills: [reactNative, ts, recoil, styledComponent],
  },
  {
    id: 'teampjt-3',
    title: 'SSAFAST',
    subTitle: '불편함을 해소하여 개발자 경험을 높이다',
    date: '23.04 - 23.05',
    gitLink: 'https://github.com/bisous1519/ssafast',
    detail: ssafastDetail,
    des: [
      '공통 컴포넌트 제작',
      '워크스페이스 홈화면 구현',
      '화면별 API 연결 구현',
      'axios 요청 객체코드 반환 구현',
      '테스트 자동화 페이지 구현',
    ],
    src1: ssafastMain,
    src2: ssafastPJMain,
    alt1: 'malicon landing page',
    alt2: 'malicon main page',
    skills: [react, nextjs, ts, redux, reactQuery, tailwind],
  }, // reduxToolkit, reactquery,
  //   {
  //     id: 1,
  //     title: 'MALICON (My Little Concert, 마리콘)',
  //     src: Project2,
  //     alt: 'projectImg',
  //     date: '21.01 ~ 21.02',
  //     team: '3명',
  //     siteHref: 'https://wikea.netlify.app/',
  //     siteP: 'wIKEA',
  //     gitHref: 'https://github.com/forCozi/ikea-clone-client',
  //     gitP: 'forCozi/ikea-clone-client',
  //     skills: [
  //       { id: 1, src: Javascript, alt: 'javascript' },
  //       { id: 2, src: Reactjs, alt: 'react' },
  //       { id: 3, src: Redux, alt: 'redux' },
  //       { id: 4, src: Reduxsaga, alt: 'redux-saga' },
  //       { id: 5, src: Styledcomponents, alt: 'styled-components' },
  //     ],
  //     detail: wikea,
  //   },
  //   {
  //     id: 2,
  //     title: 'SSAFAST (싸패스트)',
  //     src: Project2,
  //     alt: 'projectImg',
  //     date: '21.01 ~ 21.02',
  //     team: '3명',
  //     siteHref: 'https://wikea.netlify.app/',
  //     siteP: 'wIKEA',
  //     gitHref: 'https://github.com/forCozi/ikea-clone-client',
  //     gitP: 'forCozi/ikea-clone-client',
  //     skills: [
  //       { id: 1, src: Javascript, alt: 'javascript' },
  //       { id: 2, src: Reactjs, alt: 'react' },
  //       { id: 3, src: Redux, alt: 'redux' },
  //       { id: 4, src: Reduxsaga, alt: 'redux-saga' },
  //       { id: 5, src: Styledcomponents, alt: 'styled-components' },
  //     ],
  //     detail: wikea,
  //   },
  //   {
  //     id: 2,
  //     title: '이음',
  //     src: Project3,
  //     alt: 'projectImg',
  //     date: '21.01 ~ 21.02',
  //     team: '3명',
  //     siteHref: 'https://wikea.netlify.app/',
  //     siteP: 'wIKEA',
  //     gitHref: 'https://github.com/forCozi/ikea-clone-client',
  //     gitP: 'forCozi/ikea-clone-client',
  //     skills: [
  //       { id: 1, src: Javascript, alt: 'javascript' },
  //       { id: 2, src: Reactjs, alt: 'react' },
  //       { id: 3, src: Redux, alt: 'redux' },
  //       { id: 4, src: Reduxsaga, alt: 'redux-saga' },
  //       { id: 5, src: Styledcomponents, alt: 'styled-components' },
  //     ],
  //     detail: wikea,
  //   },
  // {
  //   id: 1,
  //   title: '디벨로픽',
  //   src: Project1,
  //   alt: 'projectImg',
  //   date: '21.01.01 ~ 21.08.xx',
  //   team: '3명',
  //   siteHref: '#',
  //   siteP: 'Developic',
  //   gitHref: 'https://github.com/forCozi/developic2-client',
  //   gitP: 'forCozi/developic-client',
  //   skills: [
  //     { id: 1, src: Reactjs, alt: 'react' },
  //     { id: 2, src: Typescript, alt: 'typescript' },
  //     { id: 3, src: Redux, alt: 'redux' },
  //     { id: 4, src: Styledcomponents, alt: 'styled-components' },
  //   ],
  //   detail: developic,
  // },
  // {
  //   id: 2,
  //   title: '위케아',
  //   src: Project2,
  //   alt: 'projectImg',
  //   date: '21.01 ~ 21.02',
  //   team: '3명',
  //   siteHref: 'https://wikea.netlify.app/',
  //   siteP: 'wIKEA',
  //   gitHref: 'https://github.com/forCozi/ikea-clone-client',
  //   gitP: 'forCozi/ikea-clone-client',
  //   skills: [
  //     { id: 1, src: Javascript, alt: 'javascript' },
  //     { id: 2, src: Reactjs, alt: 'react' },
  //     { id: 3, src: Redux, alt: 'redux' },
  //     { id: 4, src: Reduxsaga, alt: 'redux-saga' },
  //     { id: 5, src: Styledcomponents, alt: 'styled-components' },
  //   ],
  //   detail: wikea,
  // },
];

