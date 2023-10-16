import { Emotion, MaliconLogo } from '../../assets/icons';
import {
  maliconLanding,
  maliconLandingAni,
  maliconLoadingAni,
  maliconChattingAni,
  maliconReactionAni,
  maliconTutorialAni,
  maliconMain,
} from '../../assets/img';
import skillLogo from '../../data/skillLogo';

const { react, ts, reduxToolkit, emotion } = skillLogo;

const text = `
<img src=${maliconLanding} alt='landing page' />

>기간 : 23.01.02 ~ 23.02.17 (약 7주)
>인원 : 프론트엔드 2명(본인 포함), 백엔드 4명
>깃허브 : <a href='https://github.com/bisous1519/malicon' target='_blank' rel='noreferrer'>MALICON</a>
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
| <img src=${ts.src} alt=${ts.alt} /> | Typescript |
| <img src=${reduxToolkit.src} alt=${reduxToolkit.alt} /> | Redux Toolkit |
| <img src=${emotion.src} alt=${emotion.alt} /> | emotion |


## 맡은 역할
~~**요약** 애니메이션 / 무한스크롤 / 실시간 반응 / 실시간 채팅~~

### [ 애니메이션 ]

<img src=${maliconLandingAni} alt='landing page' />
- keyframes를 이용한 **애니메이션**으로 역동적인 **랜딩페이지**를 구현하였습니다.
- 각 컴포넌트들의 **애니메이션 delay**를 다르게 주어 각 타이밍에 맞추어 실행될 수 있도록 하였습니다.
- 중앙 로고의 keyframes를 잘게 나누어 랜덤하게 흔들리는 것 처럼 보이도록 구현하였습니다.
- 화면 각 꼭짓점에 위치한 네개의 아바타는 사용자의 아바타를 나타냈던 **컴포넌트를 재사용**하여, 한가지의 이모지만 반복적으로 나타나도록 구현하였습니다.

<img src=${maliconLoadingAni} alt='loading page' />
- keyframes을 이용한 **애니메이션**으로 동적인 **로딩페이지**를 구현하여, 실시간 방송 입장 중 이탈률을 낮추었습니다.
- 서비스의 컨셉에 맞게 '안전 요원 배치 중', '공연장 준비 중' 등의 문구를 **랜덤**하게 띄워 재미 요소를 추가하였습니다.

### [ 무한스크롤 ]

<img src=${maliconMain} alt='main page' />
- **Intersection Observer API**를 이용하여 **무한 스크롤**을 구현하였습니다.
- 방송 리스트 페이지에 적용함으로써 리스트를 탐색하는 사용자의 흐름이 끊기지 않게 하였습니다.

### [ 실시간 반응 ]
<img src=${maliconReactionAni} alt='avatar animation' />
- **face-api**를 활용하여 읽은 표정 정보와 **티처블머신**을 활용하여 읽은 사용자의 행동 정보를 'happy', 'clab' 등의 단어로 정형화하였습니다.
- 사용자 정보가 실시간으로 변경되어 이모지가 한번에 여러개 나타나는 문제가 발생하였습니다.
따라서 **throttle 함수**의 두번째 인자인 wait을 300ms로 설정하여, 이모지가 표현되고 있는 3초 동안은 사용자의 행동정보가 변경되는 것을 막았습니다. 
- **Openvidu**를 통해, 해당 단어와 사용자 정보를 담은 시그널을 발생시킨 뒤, 해당 사용자의 아바타에 이모지를 띄워 **실시간 반응**을 구현하였습니다.

<img src=${maliconTutorialAni} alt='tutorial page' />
- 실시간 방송 페이지에서 사용했던 **사용자의 행동정보 인식 컴포넌트를 재사용** 가능하도록 **리팩토링**하였습니다.
- 아바타 활용 메커니즘이 잘 이해되도록 튜토리얼 페이지를 꾸몄으며 각 단계 별로 특정 표정이나 행동이 인식된 경우에만 다음 단계 이동 버튼이 활성화되도록 구현하였습니다.

### [ 실시간 채팅 ]
<img src=${maliconChattingAni} alt='landing page' />
- **Openvidu**를 통해, 사용자의 메세지 내용을 담은 시그널을 발생시켜 **실시간 채팅**을 구현하였습니다.

## 프로젝트 성과
아이디어의 독창성과 프로젝트 완성도를 인정받아 **삼성 청년 SW 아카데미(SSAFY) 8기 공통프로젝트 우수상**을 수여하였습니다.
`;
// ## 프로젝트 리뷰

const icon = { src: MaliconLogo, alt: 'malicon logo' };

const data = {
  name: 'MALICON',
  icon,
  text,
};

export default data;

