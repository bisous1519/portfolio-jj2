import {
  maliconLanding,
  maliconMain,
  maliconLoading,
  eeumMain,
  eeumDiary,
  ssafastMain,
  ssafastPJMain,
  portfolioMain,
  portfolioSkillIcons,
  portfolioSkills,
  eeumMain2,
} from '../assets/img';
import {
  maliconDetail,
  eeumDetail,
  ssafastDetail,
  portfolioDetail,
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
  openvidu,
} = skillLogo;

export const projectData = [
  {
    nav: 'malicon',
    id: 'teampjt-1',
    title: 'MALICON',
    subTitle: '아바타로 소통하는 실시간 방송 플랫폼',
    date: '23.02 - 23.03',
    gitLink: 'https://github.com/bisous1519/malicon',
    detail: maliconDetail,
    des: [
      '애니메이션 구현',
      '무한 스크롤 구현',
      '실시간 반응 구현',
      '실시간 채팅 구현',
      '튜토리얼 페이지 구현',
    ],
    src1: maliconLanding,
    src2: maliconMain,
    alt1: 'malicon landing page',
    alt2: 'malicon main page',
    skills: [react, ts, reduxToolkit, emotion, openvidu],
  },
  {
    nav: 'ssafast',
    id: 'teampjt-3',
    title: 'SSAFAST',
    subTitle: '불편함을 해소하여 개발자 경험을 높이다',
    date: '23.04 - 23.05',
    gitLink: 'https://github.com/bisous1519/ssafast',
    detail: ssafastDetail,
    des: [
      '워크스페이스 홈화면 구현',
      '화면별 API 매칭 구현',
      'API 요청 구현',
      'axios 객체코드 반환 구현',
      'API 유스케이스 테스트 구현',
    ],
    src1: ssafastMain,
    src2: ssafastPJMain,
    alt1: 'malicon landing page',
    alt2: 'malicon main page',
    skills: [react, nextjs, ts, redux, reactQuery, tailwind],
  },
  {
    nav: 'eeum',
    id: 'teampjt-2',
    title: '이음',
    subTitle: '자립준비청년의 자립을 돕는 파트너',
    date: '23.03 - 23.04',
    gitLink: 'https://github.com/bisous1519/E-Eum',
    detail: eeumDetail,
    des: [
      '공통 컴포넌트 제작',
      '네비게이션, 스택 세팅',
      '네비게이션 버튼 구현',
      '카테고리 구현',
      '꿈 기록 페이지 구현',
      '관리자 페이지 구현',
    ],
    app: true,
    src1: eeumMain,
    src2: eeumDiary,
    src3: eeumMain2,
    alt1: 'malicon landing page',
    alt2: 'malicon main page',
    skills: [reactNative, ts, recoil, styledComponent],
  },
  {
    nav: 'portfolio',
    id: 'mypjt-1',
    title: 'PORTFOLIO',
    subTitle: '프론트엔드 개발자, 장엄지 입니다',
    date: '23.11 - 23.12',
    gitLink: 'https://github.com/bisous1519/portfolio-jj2',
    detail: portfolioDetail,
    des: [
      '스크롤 이벤트 구현',
      '다크 모드 구현',
      '네비게이션 구현',
      '애니메이션 구현',
      '반응형 구현',
    ],
    src1: portfolioMain,
    src2: portfolioSkills,
    alt1: 'portfolio thumbnail',
    alt2: 'portfolio skills',
    skills: [react, js, emotion],
  },
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

