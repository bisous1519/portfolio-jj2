import { PortfolioLogo } from '../../assets/icons';
import {
  portfolioSkillIcons,
  portfolioProjects,
  portfolioDarkMode,
  portfolioNavClick,
  portfolioAnimation,
  portfolioNavHighlight,
  portfolioMain,
  portfolioResponsive,
} from '../../assets/img';
import skillLogo from '../../data/skillLogo';

const { react, nextjs, ts, tailwind } = skillLogo;

const text = `
<img src=${portfolioMain} alt='thumbnail' />

>기간 : 24.02 ~ 진행중
>인원 : 1명
>역할 : 기획 및 디자인, 개발
>깃허브 : <a href='https://github.com/bisous1519/blog-jj2' target='_blank' rel='noreferrer'>Eomji Log</a>
___

### " Next.js로 구현하는
### 나만의 블로그 "


이 프로젝트는,
**Next.js를 공부하기 위한 목적**으로 진행중인 개인 프로젝트 입니다.

1차적인 목표로 두고 있는 것은
Next.js의 가장 큰 특징인 **서버 사이드 렌더링**에 대한 깊이있는 이해입니다.
서버 사이드 렌더링과 클라이언트 사이드 렌더링의 차이와 각각의 장점을 이해하고
어떤 상황에서 어떠한 방법을 사용하는 것이 더 효율적인지에 대해 탐구합니다.

이 외에도 **다이나믹 라우팅**을 통해 여러 페이지를 효과적으로 관리해보는 과정을 통해
Next.js의 라우팅 시스템에 대해 이해하고,
이후 **검색 엔진 최적화** 과정을 진행해보고자 합니다.

## 진행 계획
- [x] 공식 문서를 기반으로 한 Next.js 학습
- [x] 다이나믹 라우팅을 활용한 전반적인 레이아웃 구현
- [ ] 블로그 글 작성, 수정, 삭제 기능
- [ ] 블로그 글 카테고리 별, 키워드 별 검색 기능
- [ ] 검색 엔진 최적화

## 프론트엔드 기술 스택

| <img src=${react.src} alt=${react.alt} /> | React |
| :---: | :---: |
| <img src=${nextjs.src} alt=${nextjs.alt} /> | Next.js |
| <img src=${ts.src} alt=${ts.alt} /> | Typescript |
| <img src=${tailwind.src} alt=${tailwind.alt} /> | Tailwind |


## 진행 사항
~~**요약** SSR 진행중 / SEO 진행중 / 다이나믹 라우팅~~
`;

const icon = { src: PortfolioLogo, alt: 'portfolio logo' };

const data = {
  name: 'Eomji Log',
  icon,
  text,
};

export default data;

