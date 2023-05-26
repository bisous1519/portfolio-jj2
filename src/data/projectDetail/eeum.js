import { EeumLogo } from '../../assets/icons';
import {
  eeumMain2,
  eeumNav,
  eeumDiaryAni,
  eeumCommonComp,
  eeumTheme,
} from '../../assets/img';
import skillLogo from '../skillLogo';

const { reactNative, ts, recoil, styledComponent } = skillLogo;

const text = `
<img src=${eeumMain2} alt='landing page' />

>기간 : 23.02.20 ~ 23.04.07 (약 7주)
>인원 : 프론트엔드 3명(본인 포함), 백엔드 3명
>깃허브 : [E-Eum](https://github.com/bisous1519/E-Eum)
___

### " 자립 준비 청년과 사람을 [이음]
### 자립 준비 청년과 사회를 [이음] "

**이음**은,
보육원의 보호가 종료된 ‘자립 준비 청년’들의 드림 파트너 서비스 어플입니다.

다른 자립 준비 청년에게 익명으로 고민을 털어놓거나,
전문 상담가를 통한 고민 상담을 통한 정서적 자립을 지원합니다.
꿈을 이루어 나가는 과정을 다이어리에 작성하고,
그 과정에서 필요한 물품을 후원받을 수 있도록 하여 경제적인 자립을 지원합니다.

## 기획 배경
**이음은 자립 준비 청년의 자립을 돕기위해 개발되었습니다.**

자립준비청년들이 꿈을 이루어나가는 과정에서
혼자가 아니라 사회·이웃과 ‘연결’되어 있다는 것을 체감할 수 있도록
든든한 연결 고리를 만들고자 했습니다.

## 핵심 기능
- 자립 준비 청년들은 다른 사용자와 고민을 나누거나 전문가 상담을 받을 수 있습니다.
- 고민 메세지 작성 시, 내용에 대한 유해도 검사를 통해 악성 메세지 유포를 사전에 차단합니다.
- 꿈을 이루어 나가는 과정을 그린 다이어리를 작성할 수 있습니다.
- 꿈을 이루는 과정에서 필요한 물품에 대한 후원 요청 글을 작성할 수 있습니다.
- 후원을 원하는 기타 사용자들은 카카오페이 API를 통해 원하는 자립 준비 청년에게 후원할 수 있습니다.

## 프론트엔드 기술 스택
| <img src=${reactNative.src} alt=${reactNative.alt} /> | React Native |
| :---: | :---: |
| <img src=${ts.src} alt=${ts.alt} /> | Typescript |
| <img src=${recoil.src} alt=${recoil.alt} /> | Recoil |
| <img src=${styledComponent.src} alt=${styledComponent.alt} /> | styled-components |


## 맡은 역할
~~**요약** 네비게이션과 스택 세팅, 공통 컴포넌트 제작, theme.js, 꿈 기록 페이지~~

### [ 네비게이션과 스택 세팅 ]

<div><img src=${eeumNav} alt='navigation' /></div>

- 사용자의 어플 이용 흐름을 고려하여 **Natigation과 Stack**을 쌓아 효율적인 페이지 이동의 구성을 만들었습니다.
- 보다 깔끔한 UI와 UX 제공을 위해 스택 헤더를 숨기고 왼쪽 하단에 **네비게이션 버튼**을 구현하였습니다.

### [ 꿈 기록 페이지 ]
<div><img src=${eeumDiaryAni} alt='diary page' /></div>

- 꿈을 이루기 위한 여러가지 목표들을 태그로 설정할 수 있습니다.

### [ 공통 컴포넌트 제작 ]
<img id='imgimg' src=${eeumCommonComp} alt='commonButton.tsx code' />
- **공통 컴포넌트 제작**으로 일관된 UI를 제공하여 사용자 경험을 높였습니다.
- 특히 각종 페이지에 공통으로 사용되는 버튼의 경우, props를 통해 크기와 디자인을 선택할 수 있게 **리팩토링**하여 사용되는 목적에 따라 컴포넌트의 재사용 범위를 팀원이 융통성있게 선택하여 구현할 수 있도록 하였습니다.

### [ theme.js ]
<img src=${eeumTheme} alt='theme.ts code' />
- 폰트 사이즈나 자주 쓰이는 색상등을 객체화하여 **theme.ts**파일로 작성했습니다.
- styled-component에서 제공하는 **ThemeProvider** 컴포넌트를 통해 모든 컴포넌트에서 편하게 사용할 수 있도록 하여 개발 속도를 향상시켰습니다.

`;
// ## 프로젝트 성과

// ## 프로젝트 리뷰

// <div>
// <ul>
// <li><img src=${reactNative.src} alt=${reactNative.alt} /><span>React Native</span></li>
// <li><img src=${ts.src} alt=${ts.alt} /><span>Typescript</span></li>
// <li><img src=${recoil.src} alt=${recoil.alt} /><span>Recoil</span></li>
// <li><img src=${styledComponent.src} alt=${styledComponent.alt} /><span>styledComponent</span></li>
// </ul>
// </div>

const icon = { src: EeumLogo, alt: 'eeum logo' };

const data = {
  name: '이음',
  icon,
  text,
};

export default data;

