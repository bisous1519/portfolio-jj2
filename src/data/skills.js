import skillLogo from '../data/skillLogo';

const {
  js,
  ts,
  react,
  reactNative,
  vue,
  nextjs,
  redux,
  reduxSaga,
  reactQuery,
  recoil,
  sass,
  styledComponent,
  emotion,
  tailwind,
  java,
  springBoot,
  nestjs,
  mySQL,
  git,
  jira,
  figma,
  css,
} = skillLogo;

const frontendSkills = [
  {
    id: 'skills-2',
    icon: react,
    name: 'React',
    lv: 4,
    des: [
      "'컴포넌트 기반 아키텍처'에 대한 이해를 바탕으로, 재사용성과 유지보수를 고려한 컴포넌트를 작성할 수 있습니다.",
      'useState를 활용한 상태 관리에 능숙하며, 상황에 따라 Context API를 활용하여 전역적으로 상태를 공유하고 관리할 수 있습니다.',
      'custom hook을 작성하여 재사용 가능한 로직을 구현할 수 있습니다.',
      'axios나 fetch를 통해 API 통신을 능숙하게 다룰 수 있습니다.',
      'react-router-dom 라이브러리를 사용하여 SPA의 라우팅을 구현할 수 있습니다.',
    ],
  },
  {
    id: 'skills-3',
    icon: ts,
    name: 'Typescript',
    lv: 4,
    des: [
      '정적 타이핑 특성을 활용하여, 코드 오류를 줄이고 명확한 의사 전달로 효율적인 협업을 추구합니다.',
      'API 통신 시 인터페이스를 통해 응답 데이터의 구조를 명시하여, 안정적이고 가독성 높은 코드를 작성할 수 있습니다.',
      '제네릭을 활용하여 재사용성과 확장성 높은 코드를 작성할 수 있습니다.',
      '리액트와 TypeScript를 결합하여 타입 안정성을 보장하는 컴포넌트를 구현할 수 있습니다.',
    ],
  },
  {
    id: 'skills-4',
    icon: redux,
    name: 'Redux',
    lv: 4,
    des: [
      '액션, 리듀서, 스토어에 대한 이해를 바탕으로, 전역적이고 체계적으로 상태 관리를 수행할 수 있습니다.',
      'Redux Thunk, Redux Saga와 같은 미들웨어를 활용하여 비동기 작업을 처리한 경험이 있습니다.',
      'Redux Toolkit을 이용해 보일러플레이트 코드를 줄여, 개발 생산성을 향상시킨 경험이 있습니다.',
      'Recoil, React Query 등 다양한 상태 관리 라이브러리를 이해하고, 상황에 따라 적절한 상태 관리 방법을 선택하여 적용할 수 있습니다.',
    ],
  },
  {
    id: 'skills-11',
    icon: css,
    name: 'CSS',
    lv: 4,
    des: [
      'CSS의 기본적인 속성을 이해하고, 이를 활용해 웹페이지와 모바일 레이아웃을 구성하고 스타일링할 수 있습니다.',
      'Flexbox와 Grid를 이용해 복잡한 레이아웃을 구현할 수 있습니다.',
      '미디어 쿼리를 사용해 반응형 웹을 구현할 수 있습니다.',
      'styled-component, emotion 같은 CSS-in-JS 라이브러리와 Tailwind를 활용한 디자인 구현에 능숙합니다.',
    ],
  },
  // {
  //   id: 'skills-10',
  //   icon: reactNative,
  //   name: 'React Native',
  //   des: ['', '', ''],
  // },

  //   {
  //     id: 'skills-',
  //     name: '',
  //     des: ['', '', ''],
  //   },
];

const etcSkills = [
  {
    id: 'skills-5',
    icon: java,
    name: 'Java',
    lv: 3,
    des: [
      'CRUD 기능의 API를 작성하여 클라이언트로부터 온 요청을 처리할 수 있습니다.',
      '다양한 자료구조를 활용하여 알고리즘 문제를 풀이할 수 있습니다.',
    ],
  },
  {
    id: 'skills-8',
    icon: git,
    lv: 3,
    name: 'Git',
    des: [
      '깃 컨벤션을 지키려 노력합니다.',
      'branch 분기를 통해 협업할 수 있습니다.',
      '코드의 변경사항을 추적하고 관리하는 등 버전 관리를 할 수 있습니다.',
      'Github, Gitlab을 사용해 협업한 경험이 있습니다.',
    ],
  },
  {
    id: 'skills-51',
    icon: figma,
    name: 'Figma',
    lv: 3,
    des: [
      '오토레이아웃, 프레임 등의 기능을 활용하여 다수의 프로젝트에서 기획 및 디자인 작업을 진행한 경험이 있습니다.',
      'Figma로 제작된 디자인을 바탕으로 웹과 앱 프론트엔드 개발을 진행한 경험이 있습니다.',
    ],
  },
  {
    id: 'skills-7',
    icon: mySQL,
    name: 'MySQL',
    lv: 2,
    des: [
      '데이터의 생성, 조회, 수정, 삭제(CRUD)를 위한 SQL문을 작성할 수 있습니다.',
      'JOIN, GROUP BY, ORDER BY 등을 통해 데이터를 효율적으로 조회할 수 있습니다.',
    ],
  },
  {
    id: 'skills-6',
    icon: springBoot,
    name: 'Spring Framework',
    lv: 1,
    des: [
      'Spring Framework를 이용하여 백엔드 서버를 개발한 경험이 있습니다.',
      '자동화된 테스트 환경을 활용해 Unit 단위로 코드를 테스트해 본 경험이 있습니다.',
    ],
  },
  {
    id: 'skills-9',
    icon: nestjs,
    name: 'Nestjs',
    lv: 1,
    des: [
      'NestJS의 핵심 개념과 아키텍처를 이해하고 있습니다.',
      'TypeORM을 활용하여 게시판 CRUD 기능의 API를 작성해 본 경험이 있습니다.',
    ],
  },
];

const data = [
  {
    id: 'skills-1',
    icon: js,
    name: 'Javascript',
    lv: 4,
    des: [
      'ES6를 이해하고 있습니다.',
      'JS 기반의 라이브러리와 프레임워크를 사용할 수 있습니다.',
      '다양한 자료구조를 직접 구현하여 알고리즘 문제를 풀이할 수 있습니다.',
    ],
  },
  {
    id: 'skills-9',
    icon: jira,
    lv: 3,
    name: 'Jira',
    des: [
      '에자일 방법론을 이해하고 에자일하게 개발할 수 있습니다.',
      '카드를 생성하고 스프린트를 시작하여 일정을 체계적으로 관리할 수 있습니다.',
      '시각화된 데이터들을 이해하고 진행사항을 파악하여 효율적으로 협업할 수 있습니다.',
    ],
  },
];

const skillData = {
  frontendSkills,
  etcSkills,
};

export default skillData;

