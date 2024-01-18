import { SsafastLogoBlack } from '../../assets/icons';
import {
  ssafastMain,
  ssafastPJMain,
  ssafastModeDark,
  ssafastkModeWhite,
  ssafastApiMappingAni,
  ssafastApiReqAni,
  ssafastApiReqAxios,
  ssafastUsecaseAni,
  ssafastCreateUsecase,
  ssafastUsecaseList,
  ssafastUsecaseSelectApi,
} from '../../assets/img';
import skillLogo from '../../data/skillLogo';

const { react, nextjs, ts, redux, reactQuery, tailwind } = skillLogo;

const text = `
<img src=${ssafastMain} alt='main page' />

>기간 : 23.04.10 ~ 23.05.19 (약 7주)
>인원 : 프론트엔드 3명(본인 포함), 백엔드 3명
>깃허브 : <a href='https://github.com/bisous1519/ssafast' target='_blank' rel='noreferrer'>SSAFAST</a>

___

### " 불편함을 해소하여
### 개발 속도를 더욱 빠르게! "

SSAFY(삼성 청년 SW 아카데미)와 Fast(빠르다)의 합성어인 **SSAFAST**는,
프로젝트 설계ㆍ테스트 단계에서의 더 높은 개발자 경험을 위한 오픈소스입니다.

Figma, Notion, Postman, Swagger, Locust 등
수많은 개발 플랫폼의 이동을 최소화함으로써, 업무 집중력을 높입니다!

개발자들이 프로젝트에 참여하며 느낄 수 있는 크고 작은 불편함을 해소하고자 하였습니다.

## 기획 배경
**SSAFAST는 더 높은 개발자 경험을 위해 개발되었습니다.**

여러번 프로젝트를 기획부터 개발, 배포 단계까지 진행하며 팀원들이 느꼈던 것을 바탕으로 기획되었습니다.
프로젝트의 기획 단계가 하나의 플랫폼 안에서 이루어질 수 있도록 하여
프로젝트 관련 정보가 여러 플랫폼으로 분산되는 것을 막아
팀원들의 집중도를 향상시키고 프로젝트 진행 효율을 높이고자 하였습니다.
또한, DTO의 기본정보를 통해 Server의 API를 작성해주어 비슷하게 반복되는 작업시간을 대폭 줄여
한 층 높은 개발자 경험을 제공합니다.

## 핵심 기능
- **DTO 및 API 명세**
DTO를 작성하고, 작성된 DTO를 기반으로 API를 설계할 수 있습니다.
Figma에 디자인된 화면을 프레임 단위로 가져오고 각 프레임 별 필요한 API를 매핑할 수 있습니다.
- **API 요청**
작성된 API들에 대한 요청 테스트를 진행하고 프론트에서 서버에 요청하는 axios 객체 코드를 생성할 수 있습니다.
- **API 유스케이스 테스트**
하나의 시나리오를 위해 실행되어야하는 API들의 데이터를 유기적으로 요청하여, 해당 기능이 성공적으로 구현되었는지 쉽게 확인할 수 있습니다.
- **API 성능 테스트**
테스트 서버를 동적으로 생성하여, API의 성능테스트를 할 수 있습니다.

## 프론트엔드 기술 스택

| <img src=${react.src} alt=${react.alt} /> | React |
| :---: | :---: |
| <img src=${nextjs.src} alt=${nextjs.alt} /> | Next.js |
| <img src=${ts.src} alt=${ts.alt} /> | Typescript |
| <img src=${redux.src} alt=${redux.alt} /> | Redux |
| <img src=${reactQuery.src} alt=${reactQuery.alt} /> | React Query |
| <img src=${tailwind.src} alt=${tailwind.alt} /> | Tailwind |

## 맡은 역할
~~**요약** 화면별 API 매칭 / API 요청 및 axios 객체코드 반환 / API 유스케이스 테스트 구현~~

### [ 화면별 API 매핑 ]
<img src=${ssafastApiMappingAni} alt='mapping api' />
- 작성된 API들을 원하는 Figma 화면에 매핑할 수 있도록 하여, 화면별 필요한 API를 가시화하였습니다.
- 사용자가 체크박스의 체크/해제를 왼쪽 컨테이너에서 바로 확인할 수 있도록, **useState**를 통해 각 API의 선택 여부를 저장하는 방식으로 구현하였습니다.

### [ API 요청 ]
<img src=${ssafastApiReqAni} alt='api request' />
- 사용자가 입력한 요청 정보를 토대로 하여 API를 요청할 수 있습니다.

<img src=${ssafastApiReqAxios} alt='axios code' />
- 테스트가 성공일 경우, 우측 상단 '받기'버튼을 통해 axios 객체 코드를 반환합니다.

### [ API 유스케이스 테스트 ]
<img src=${ssafastUsecaseAni} alt='usecase test' />
- 하나의 시나리오를 위해 실행되어야하는 API들의 데이터를 유기적으로 요청하여, 해당 기능이 성공적으로 구현되었는지 쉽게 확인할 수 있도록 구현하였습니다.

## 프로젝트 성과
서비스의 실용성을 인정받아 **삼성 청년 SW 아카데미(SSAFY) 8기 자율프로젝트 우수상**을 수상하였습니다.
`;

// ## 프로젝트 리뷰

const icon = { src: SsafastLogoBlack, alt: 'ssafast logo' };

const data = {
  name: 'SSAFAST',
  icon,
  text,
};

export default data;

