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
  mySQL,
  git,
  jira,
  css,
} = skillLogo;

const frontendSkills = [
  {
    id: 'skills-2',
    icon: react,
    name: 'React',
    lv: 4,
    des: [
      '라이프 사이클을 이해하고 있습니다.',
      '작은 프로젝트의 프론트엔드를혼자 맡아 진행할 수 있습니다.',
      '컴포넌트의 개념을 이해하고 재사용성이 좋은 컴포넌트를 작성할 수 있습니다.',
    ],
  },
  {
    id: 'skills-3',
    icon: ts,
    name: 'Typescript',
    lv: 4,
    des: [
      'Type-safe한 코드를 코드를 작성할 수 있습니다.',
      'Typescript를 이용해 실수를 줄이고 효율적으로 협업합니다.',
      // '인터페이스를 통해 데이터 형식을 지정하여 클라이언트 내에서 데이터가 오가거나 서버와 데이터를 주고받을 때 실수를 줄이며 개발할수 있습니다.',
      '제네릭을 이해하며 이를 통해 재사용 가능한 코드를 작성할 수 있습니다.',
    ],
  },
  {
    id: 'skills-4',
    icon: redux,
    name: 'Redux',
    lv: 4,
    des: [
      '클라이언트 단에서 발생한 데이터나, 서버에서 가져온 데이터를 전역적이고 체계적으로 관리할 수 있습니다.',
      '다양한 상태관리 라이브러리들의 장단점을 이해하고 프로젝트의 상황에 맞게 적용할 수 있습니다.',
    ],
  },
  {
    id: 'skills-11',
    icon: css,
    name: 'CSS',
    lv: 4,
    des: [
      'css-in-js를 작성할 수 있습니다.',
      '다양한 스타일 라이브러리를 사용하여 CSS를 작성할 수 있습니다.',
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
    id: 'skills-6',
    icon: springBoot,
    name: 'Spring Boot',
    lv: 1,
    des: [
      'Spring Boot F/W를 이용하여 백엔드 서버를 개발한 경험이 있습니다.',
      // 'Spring Boot의 장점을 이해하고 활용할 수 있습니다.',
      '자동화된 테스트 환경을 활용해 Unit 단위로 코드를 테스트해 본 경험이 있습니다.',
    ],
  },
  {
    id: 'skills-7',
    icon: mySQL,
    name: 'MySQL',
    lv: 2,
    des: [
      'SQL문을 통해 테이블을 조회하고 데이터를 변경할 수 있습니다.',
      'JOIN을 통해 원하는 데이터를 얻을 수 있습니다.',
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

