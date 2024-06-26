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

const { react, ts, reduxToolkit, emotion, openvidu } = skillLogo;

const text = `
<img src=${maliconLanding} alt='landing page' />

>기간 : 23.01.02 - 23.02.17 (약 7주)
>인원 : 총 6명 (FE 2명, BE 4명)
>역할 : 기획 및 디자인, 프론트엔드 개발
>기여도 : 40%
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

인스타, 유튜브, 위버스 등을 통한 실시간 방송은 매우 보편화 되었지만,
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
| <img src=${openvidu.src} alt=${openvidu.alt} /> | openVidu |


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
- **Intersection Observer API**를 이용하여 **무한 스크롤**을 구현한 뒤 **컴포넌트화** 하였습니다.
- 메인 페이지와 피드 페이지 각각에서 해당 컴포넌트를 재사용하여, 두 페이지 모두 무한스크롤이 적용되도록 구현하였습니다.

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

## 프로젝트 회고
- WebRTC 기술에 대해 공부하고 적용해보는 기회가 되었습니다.
그 중에서 특히 Openvidu를 사용하게 되었는데, 공식 문서 상에 클래스형 컴포넌트로 예시가 들어 있어서
함수형 컴포넌트 위주로 사용하면서 개발을 해왔었는데 이번 기회에 클래스형 컴포넌트에 대해서도 공부하게 된 기회가 되어 좋았습니다.
다만, 주어진 짧은 기간 안에 익숙치 않은 기술을 처음 접하느라 공식 문서에 나와있는 그대로 프로젝트에 적용해보는데에 그쳤는데,
WebRTC 부분만 클래스형 컴포넌트로 개발한 탓에 함수형 컴포넌트에 익숙한 다른 팀원들도 개발에 어려움을 겪었을 뿐만 아니라
전체적인 코드상에도 통일감이 깨져 가독성과 유지보수성이 조금 떨어질 수 있다고 판단되었습니다.
따라서 다음에 또 Openvidu를 사용해볼 기회가 주어진다면 함수형 컴포넌트로 직접 변환하여 적용해보고 싶다는 생각이 들었습니다.
- 소통이 잘되고 서로 잘 도와 팀워크가 좋았기 때문에 성과가 잘 날 수 있었습니다.
돌이켜보면 해당 프로젝트의 성과가 좋게 날 수 있었던 가장 큰 이유는 팀원들 덕분이었던 것 같습니다.

## 프로젝트 성과
아이디어의 독창성과 프로젝트 완성도를 인정받아 **삼성 청년 SW 아카데미(SSAFY) 8기 공통프로젝트 우수상**을 수상하였습니다.
`;

/**
 * [ 역할 요약 ] 기획 및 디자인, 프론트엔드 개발(리더)
[ 역할 상세 ]
- 회원가입 / 로그인 : 정규표현식을 활용해 비밀번호 검증 기능 구현. localStorage에 accessToken과 refreshToken을 저장하고 refreshToken 정보를 이용한 서버와의 통신으로 로그인 유지 기능 구현.
- 애니메이션 구현 : keyframes를 이용한 애니메이션으로 역동적인 랜딩페이지와 로딩페이지를 구현하여 실시간 방송 입장 중 사용자 이탈률을 낮춤.
- 무한스크롤 구현 : Intersection Observer API를 이용하여 무한스크롤을 구현한 뒤 컴포넌트화 하여, 무한스크롤을 원하는 페이지 마다 해당 컴포넌트를 재사용할 수 있도록 구현.
- 사용자의 실시간 반응 구현 : face-api와 티처블머신을 활용하여 사용자의 표정 정보와 행동 정보를 읽어온 뒤, 정보에 해당하는 이모지가 아바타 위에 나타나도록 구현.
- 실시간 채팅 구현 : OpenVidu를 통해 사용자의 메세지 내용을 담은 시그널을 발생시켜 실시간 채팅 구현.
- 메인 페이지 / 마이페이지 / 튜토리얼 페이지 구현
 */

const icon = { src: MaliconLogo, alt: 'malicon logo' };

const data = {
  name: 'MALICON',
  icon,
  text,
};

export default data;

