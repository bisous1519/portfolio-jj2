import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoHomeOutline,
} from 'react-icons/io5';
import { VscGithubAlt } from 'react-icons/vsc';
import {
  Apeach2 as Project1,
  Apeach3 as Project2,
  eeumMain as Project3,
  bear as MyProject1,
  bear2 as MyProject2,
} from '../assets/img';
import { developic } from './text/developic';
import { wikea } from './text/wikea';
import { starbucks } from './text/starbucks';
import { booksy } from './text/booksy';
import Javascript from '../assets/icons/javascript_logo.png';
import Nextjs from '../assets/icons/nextjs_logo.png';
import Reactjs from '../assets/icons/react_logo.png';
import Redux from '../assets/icons/redux_logo.png';
import Reduxsaga from '../assets/icons/redux-saga_logo.png';
import Sass from '../assets/icons/sass_logo.png';
import Styledcomponents from '../assets/icons/styled-components_logo.png';
import Typescript from '../assets/icons/typescript_logo.png';
import Vuejs from '../assets/icons/vuejs_logo.png';

export const contact = [
  {
    id: 1,
    href: 'mailto:bisous1519@gmail.com',
    target: '',
    rel: '',
    icon: <IoMailOutline />,
    contact: 'bisous1519@gmail.com',
  },
  {
    id: 2,
    href: 'tel:010-3566-0340',
    target: '',
    rel: '',
    icon: <IoPhonePortraitOutline />,
    contact: '010.3566.0340',
  },
  {
    id: 3,
    href: 'https://velog.io/@bisous1519',
    target: '_blank',
    rel: 'noreferrer',
    icon: <IoHomeOutline />,
    contact: 'velog.io/@bisous1519',
  },
  {
    id: 4,
    href: 'https://github.com/bisous1519',
    target: '_blank',
    rel: 'noreferrer',
    icon: <VscGithubAlt />,
    contact: 'github.com/bisous1519',
  },
];

export const skills = [
  {
    id: 1,
    skill: 'Javascript',
    summ: '어어어어 사용 가능합니다 <br />쌉가능이죠 <br />네네 가능하다니깐요 <br />진짜야아아아아아',
  },
  {
    id: 2,
    skill: 'React',
    summ: `어어어어 사용 가능합니다 <br />
        쌉가능이죠 <br />
        네네 가능하다니깐요 <br />
        진짜야아아아아아`,
  },
  {
    id: 3,
    skill: 'TypeScript',
    summ: `어어어어 사용 가능합니다 <br />
        쌉가능이죠 <br />
        네네 가능하다니깐요 <br />
        진짜야아아아아아`,
  },
  {
    id: 4,
    skill: 'Nextjs',
    summ: `어어어어 사용 가능합니다 <br />
        쌉가능이죠 <br />
        네네 가능하다니깐요 <br />
        진짜야아아아아아`,
  },
];

export const teamProject = [
  {
    id: 1,
    title: 'MALICON (My Little Concert, 마리콘)',
    src: Project2,
    alt: 'projectImg',
    date: '21.01 ~ 21.02',
    team: '3명',
    siteHref: 'https://wikea.netlify.app/',
    siteP: 'wIKEA',
    gitHref: 'https://github.com/forCozi/ikea-clone-client',
    gitP: 'forCozi/ikea-clone-client',

    skills: [
      { id: 1, src: Javascript, alt: 'javascript' },
      { id: 2, src: Reactjs, alt: 'react' },
      { id: 3, src: Redux, alt: 'redux' },
      { id: 4, src: Reduxsaga, alt: 'redux-saga' },
      { id: 5, src: Styledcomponents, alt: 'styled-components' },
    ],
    detail: wikea,
  },
  {
    id: 2,
    title: 'SSAFAST (싸패스트)',
    src: Project2,
    alt: 'projectImg',
    date: '21.01 ~ 21.02',
    team: '3명',
    siteHref: 'https://wikea.netlify.app/',
    siteP: 'wIKEA',
    gitHref: 'https://github.com/forCozi/ikea-clone-client',
    gitP: 'forCozi/ikea-clone-client',

    skills: [
      { id: 1, src: Javascript, alt: 'javascript' },
      { id: 2, src: Reactjs, alt: 'react' },
      { id: 3, src: Redux, alt: 'redux' },
      { id: 4, src: Reduxsaga, alt: 'redux-saga' },
      { id: 5, src: Styledcomponents, alt: 'styled-components' },
    ],
    detail: wikea,
  },
  {
    id: 2,
    title: '이음',
    src: Project3,
    alt: 'projectImg',
    date: '21.01 ~ 21.02',
    team: '3명',
    siteHref: 'https://wikea.netlify.app/',
    siteP: 'wIKEA',
    gitHref: 'https://github.com/forCozi/ikea-clone-client',
    gitP: 'forCozi/ikea-clone-client',

    skills: [
      { id: 1, src: Javascript, alt: 'javascript' },
      { id: 2, src: Reactjs, alt: 'react' },
      { id: 3, src: Redux, alt: 'redux' },
      { id: 4, src: Reduxsaga, alt: 'redux-saga' },
      { id: 5, src: Styledcomponents, alt: 'styled-components' },
    ],
    detail: wikea,
  },
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

export const myProject = [
  {
    id: 1,
    title: '스타벅스',
    src: MyProject1,
    alt: 'projectImg',
    date: '21.01.01 ~ 21.08.xx',
    siteHref: '#',
    siteP: 'Starbucks',
    gitHref:
      'https://github.com/bisous1519/react-prac/tree/master/210416-starbucks-clone-react',
    gitP: 'bisous1519/starbucks-clone',
    skills: [{ id: 1, src: Reactjs, alt: 'React' }],
    detail: starbucks,
  },
  {
    id: 2,
    title: '북시',
    src: MyProject2,
    alt: 'projectImg',
    date: '21.01.01 ~ 21.08.xx',
    siteHref: '#',
    siteP: 'Booksy',
    gitHref: 'https://github.com/bisous1519/booksy-front',
    gitP: 'bisous1519/booksy-front',
    skills: [
      { id: 1, src: Javascript, alt: 'javascript' },
      { id: 2, src: Vuejs, alt: 'vuejs' },
      { id: 3, src: Sass, alt: 'sass' },
    ],
    detail: booksy,
  },
];

