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

const { react, js, emotion } = skillLogo;

const text = `
<img src=${portfolioMain} alt='thumbnail' />

>기간 : 23.11.01 - 23.11.30 (약 5주)
>인원 : 1명
>역할 : 기획 및 디자인, 개발, 서버리스 배포
>기여도 : 100%
>깃허브 : <a href='https://github.com/bisous1519/portfolio-jj2' target='_blank' rel='noreferrer'>Eomji's portfolio</a>
___

### " 사용자 관점에서 생각하는,
### FE 개발자 장엄지 입니다 "


현재 보고 계시는 이 사이트는,
제가 다룰 줄 아는 **기술 스택과 프로젝트를 소개하기 위해 제작**한 사이트 입니다.
별도의 서버 없이 구현되었으며, netlify를 통해 **프론트엔드 코드만 배포**하였습니다.

Figma를 이용해 기획하고, React, Javascript 로 구현한 SPA이며,
모든 CSS는 emotion 라이브러리를 이용해 css-in-js로 구현하였습니다.
최소한의 정보로 최대한 저를 파악하실 수 있도록 정보의 구성과 배치를 신경써서 디자인하였으며
사소한 즐거움을 느끼실 수 있도록 스크롤 관련 이벤트 요소를 추가하였습니다.

관심에 감사드립니다.

## 핵심 기능
- 사용자의 시스템 설정에 따른 다크모드 사용이 가능합니다.
- Intersection Observer를 전체적으로 이용하여 성능면에서 보다 유리하도록 구현하였습니다.
- keyframes를 이용한 애니메이션을 구현하였습니다.
- 네비게이션을 통해 한 눈에 파악할 수 있고, 클릭을 통해 해당 내용으로 이동 가능합니다.

## 프론트엔드 기술 스택

| <img src=${react.src} alt=${react.alt} /> | React |
| :---: | :---: |
| <img src=${js.src} alt=${js.alt} /> | Javascript |
| <img src=${emotion.src} alt=${emotion.alt} /> | emotion |


## 구현 내용
~~**요약** 스크롤 이벤트 / 다크모드 / 네비게이션 / 애니메이션 / 반응형~~

### [ 스크롤 이벤트 ]

<img src=${portfolioSkillIcons} alt='skill-Icons scrollEvent' />
- **Intersection Observer api**를 이용하여 해당 스크롤 이벤트가 일어날 상자를 감시하였습니다.
- 상자가 뷰포트에 감지되었을 때, **감지된 시점의 scrollY**와 **현재 scrollY**를 이용해 '가로로 몇 픽셀 이동할지'를 계산하였습니다.
계산된 픽셀을 **useState** hook을 통해 저장한 뒤, **CSS translate 속성에 동적으로 부여**하여,
사용자의 스크롤에 따라 가로로 이동하는 상자를 구현하였습니다.

<img src=${portfolioProjects} alt='projects scrollEvent' />
- 프로젝트를 담고있는 **각 영역의 높이**를 **뷰포트의 높이**(100hv)로 설정하였습니다.
- 그 다음, 각 영역을 **Intersection Observer api**로 감시하였습니다.
감시하던 영역의 30%가 뷰포트와 교차되었을 때, **해당 영역의 offsetTop 값으로 스크롤을 강제로 이동**하여
한 프로젝트 단위로 스크롤이 이동하는 것 처럼 구현하였습니다.
- 이 때, 스크롤의 **behavior** 속성을 **'smooth'** 로 두어서 스크롤이 offsetTop 위치에서 정확히 멈추지 않는 **문제가 발생**하였습니다.
따라서 스크롤을 offsetTop 위치로 강제로 이동 시킨 뒤, **setTimeout 함수**를 통해 700ms 후에 **현재의 스크롤과 offsetTop 위치를 비교**하여 같지 않을 경우 한 번 더 강제 이동하는 작업을 추가해 해결하였습니다.


### [ 다크모드 ]

<img src=${portfolioDarkMode} alt='dark mode' />
- 사용자가 모드를 토글할 때 마다, 해당 정보를 **localStorage에 저장**하여 브라우저가 새로고침 되었을 때도 유지될 수 있도록 하였습니다.
- **matchMedia 함수**를 통한 사용자의 theme 정보 또는, 사용자 브라우저 **localStorage**에 미리 저장해둔 정보를 가져와
사용자가 **설정한 모드가 우선**시되어 보여지도록 구현하였습니다.
- 라이트 모드일 때와, 다크 모드일 때 **각각 사용할 색상 정보를 theme 변수**에 객체 형태로 저장하였습니다.
현재 모드 정보를, emotion에서 제공하는 **ThemeProvider**를 통해 모든 컴포넌트에 전달하여
모드 정보에 맞는 색상을 사용할 수 있도록 **css를 작성**하였습니다.

### [ 네비게이션 ]
<img src=${portfolioNavClick} alt='nav clickEvent' />
- nav가 가리키는 **각 영역에 id를 부여**하였습니다.
nav의 각 요소를 클릭할 때 마다 **getElementById**로 각각에 지정된 id를 통해 해당 ref를 찾은 뒤,
**ref의 offsetTop 위치로 스크롤을 이동**하는 방식으로 구현하였습니다.


<img src=${portfolioNavHighlight} alt='nav highlight' />
- **nav가 활성화 되어있는 상태**를 객체화하여 **useState** hook으로 저장한 뒤, **Context API**를 통해 전역상태로 관리하였습니다.
또한, nav가 가리키는 각 영역을 모두 **Intersection Observer api**로 감시하도록 하였습니다.
- 해당 영역이 **뷰포트에서 일정 부분 관찰**되었을 때, Context API로 저장된 setter를 통해 **nav 상태를 변경**하였고
Nav 컴포넌트에서 **useEffect를 통해 해당 state 값의 변경을 감지**하여 nav 색상이 변경되도록 구현하였습니다.

### [ 애니메이션 ]

<img src=${portfolioAnimation} alt='animation' />
- 위로 살짝 이동하며 fadeIn 효과를 줄 각 요소들을 **Intersection Observer api**로 감시하였습니다.
- 각 요소가 **뷰포트에 관찰**되었을 때, **CSS 속성을 변경**(opacity(투명도)와 transform(위치) 변경)하여 **fadeIn 효과를 구현**하였습니다.

### [ 반응형 ]
<img src=${portfolioResponsive} alt='responsive' />
- **미디어쿼리**를 사용하여 가로 폭 770px 에서 브레이크포인트를 두어, 모바일 환경의 반응형 웹을 구현하였습니다.
- 가로 폭이 좁은 모바일의 특성을 고려하여 네비게이션을 없애고, 헤더바를 버튼으로 변경하였습니다.

## 프로젝트 회고
**Intersection Observer api에 대해 깊이있게 탐구해보는 시간이 되었습니다.**
- 구현 초기엔 대부분의 스크롤 이벤트를 addEventListener를 통해 구현하였습니다. 하지만 스크롤과 관련한 이벤트가 점점 많아져 성능을 최적화하고자, 대부분의 스크롤 이벤트를 Intersection Observer를 이용한 로직으로 변경했습니다. 그 과정에서, 자바스크립트에서 이벤트 리스너가 동작하는 방식에 대한 공부가 많이 되었고, Intersection Observer API 에 대한 탐구를 깊이있게 하는 경험이 되었습니다.

**팀프로젝트와는 또 다른 색다른 경험이었습니다.**
- 거대하지 않은 프로젝트였지만, 팀원들과 의견을 조율하며 진행했던 다른 프로젝트들과 달리, 혼자서 원하는대로 프로젝트를 끌어가는 것도 색다르게 재밌는 경험이었습니다.
`;

// 우선, 스크롤 이벤트를 발생시키는 부분을 커스텀 훅으로 구현하여 리팩토링 했지만, 결국 각각의 컴포넌트에서 이벤트가 발생되는 부분은 변함이 없기에 버벅거림이 해결되지 않았습니다.

const icon = { src: PortfolioLogo, alt: 'portfolio logo' };

const data = {
  name: "Eomji's portfolio",
  icon,
  text,
};

export default data;

