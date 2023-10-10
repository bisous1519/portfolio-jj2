import { PortfolioLogo } from '../../assets/icons';
import {
  portfolioSkillIcons,
  portfolioProjects,
  portfolioDarkMode,
  portfolioNavClick,
  portfolioAnimation,
  portfolioNavHighlight,
  portfolioMain,
} from '../../assets/img';
import skillLogo from '../../data/skillLogo';

const { react, js, emotion } = skillLogo;

const text = `
<img src=${portfolioMain} alt='thumbnail' />

>기간 : 23.11.01 ~ 23.11.30 (약 5주)
>인원 : 1명(본인)
>깃허브 : <a href='https://github.com/bisous1519/portfolio-jj2' target='_blank' rel='noreferrer'>Eomji's portfolio</a>
___

### " 아바타로 소통하는 아티스트와 나,
### 아바타로 표현하는 내 감정 "


'My Little Concert'의 줄임말인 **마리콘**은,
아티스트와 팬이 아바타를 통해 소통하는 실시간 방송 플랫폼입니다.

사용자마다 자기만의 아바타를 생성하여, 아티스트와 시청자들에게 '나'의 존재를 알리고,
실시간으로 느끼고 있는 감정을 고스란히 전할 수 있도록 구현하였습니다.
아티스트는 아바타 위 이모지를 통해 팬들의 웃는 표정이나 응원봉을 흔드는 모습을 직접적으로 볼 수 있습니다.

## 기획 배경
**마리콘은 기존 실시간 방송의 소통 패러다임을 변화시키고자 개발되었습니다.**

인-타, 유-브, 위-스 등을 통한 실시간 방송은 매우 보편화 되었지만,
기존의 플랫폼들은 소통의 매개체가 채팅으로 제약적입니다.
아티스트와 팬이 조금 더 직접적인 교류를 통해
실제 공연장처럼 실시간 교류할 수 있는 플랫폼을 개발하고자 하였습니다.

## 핵심 기능
- Openvidu를 활용한 webRTC 기능으로 실시간 방송이 가능합니다.
- 티처블머신을 활용하여 사용자의 행동 정보를 읽습니다.
- Tensorflow 위에 구현된 face-api를 활용하여 사용자의 표정 정보를 읽습니다.
- 피드를 통해 일상을 나누거나, 오프라인 공연 일시를 홍보할 수 있습니다.

## 프론트엔드 기술 스택

| <img src=${react.src} alt=${react.alt} /> | React |
| :---: | :---: |
| <img src=${js.src} alt=${js.alt} /> | Javascript |
| <img src=${emotion.src} alt=${emotion.alt} /> | emotion |


## 구현 내용
~~**요약** 스크롤 이벤트 / 다크모드 / 네비게이션 / 애니메이션 / 모바일 반응형(구현중)~~

### [ 스크롤 이벤트 ]

<img src=${portfolioSkillIcons} alt='skill-Icons scrollEvent' />
- d

<img src=${portfolioProjects} alt='projects scrollEvent' />
- d

### [ 다크모드 ]

<img src=${portfolioDarkMode} alt='dark mode' />
- d

### [ 네비게이션 ]
<img src=${portfolioNavClick} alt='nav clickEvent' />
- d

<img src=${portfolioNavHighlight} alt='nav highlight' />
- d

### [ 애니메이션 ]

<img src=${portfolioAnimation} alt='animation' />
- d

## 프로젝트 리뷰
`;

const icon = { src: PortfolioLogo, alt: 'portfolio logo' };

const data = {
  name: "Eomji's portfolio",
  icon,
  text,
};

export default data;

