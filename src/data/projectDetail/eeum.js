import { EeumLogo } from '../../assets/icons';

const text = `

>기간 : 23.02.20 ~ 23.04.07 (약 7주)
>인원 : 프론트엔드 3명(본인 포함), 백엔드 3명
>깃허브 : [E-Eum](https://github.com/bisous1519/E-Eum)
___

### " 자립 준비 청년과 사람을 [이음]
### 자립 준비 청년과 사회를 [이음] "

**이음**은,
보육원의 보호가 종료된 ‘자립 준비 청년’들의 드림 파트너 서비스입니다.

고민상담, 꿈기록 작성, 꿈후원 등을 통해 정서적/경제적 자립을 지원합니다!

## 기획 배경
**이음은 자립 준비 청년의 자립을 돕기위해 개발되었습니다.**

자립준비청년들이 꿈을 이루어나가는 과정에서
혼자가 아니라 사회·이웃과 ‘연결’되어 있다는 것을 체감할 수 있도록
든든한 연결 고리를 만들고자 했습니다

## 핵심 기능
- 카카오페이 API를 연동하여 원하는 자립 준비 청년에게 후원할 수 있습니다.
- 작성된 고민을 익명의 사용자들에게 전달하여 정신적 교류를 지원합니다.
- 전문가 자격을 지닌 사용자와 연결하여 상담을 지원합니다.

## 프론트엔드 기술 스택
| ![react native](/static/media/reactnative_logo.298ef9434b7046feda98.png) | React Native |
| :---: | :---: | :---: | :---: |
| ![typescript](/static/media/typescript_logo.29073194eeda5803e7f3.png) | Typescript |
| ![recoil](/static/media/recoil_logo.5845ee6bee7ee8ca86aa.png) | Recoil |
| ![styled-components](/static/media/styled-components_logo.fbb11a4eb3c084942657.png) | styled-components |

## 맡은 역할
~~**요약** 네비게이션과 스택 세팅, 공통 컴포넌트 제작, theme.js~~

### [ 네비게이션과 스택 세팅 ]
- **Natigation과 Stack**을 쌓아 효율적인 페이지 이동의 구성을 만들었습니다.
스택 헤더를 숨기고 왼쪽 하단에 페이지 이동 버튼을 구현하여 사용자에게 보다 깔끔한 UI를 제공하였습니다.

### [ 공통 컴포넌트 제작 ]
- **공통 컴포넌트 제작**으로 일관된 UI를 제공하여 사용자 경험을 높였습니다.

### [ theme.js ]
- 폰트 사이즈나 자주 쓰이는 색상등을 객체화하여 **theme.js**파일로 작성했습니다. styled-component에서 제공하는 ThemeProvider 컴포넌트를 통해 모든 컴포넌트에서 편하게 사용할 수 있도록 하여 개발 속도를 향상시켰습니다.

`;
// ## 프로젝트 성과

// ## 프로젝트 리뷰

const icon = { src: EeumLogo, alt: 'eeum logo' };

const data = {
  name: '이음',
  icon,
  text,
};

export default data;

