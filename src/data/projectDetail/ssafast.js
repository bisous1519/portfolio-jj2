import { SsafastLogo1 } from '../../assets/icons';
import { ssafastMain, ssafastConnAPI } from '../../assets/img';
import skillLogo from '../../data/skillLogo';

const { react, nextjs, ts, redux, reactQuery, tailwind } = skillLogo;

const text = `
<img src=${ssafastMain} alt='main page />

>기간 : 23.04.10 ~ 23.05.19 (약 7주)
>인원 : 프론트엔드 3명(본인 포함), 백엔드 3명
>깃허브 : [SSAFAST](https://github.com/bisous1519/ssafast)
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
- 팀원들을 초대하여 공동 작업이 가능합니다.
- DTO를 작성할 수 있습니다.
- 작성된 DTO를 기반으로 API를 작성할 수 있습니다.
- Figma API를 통해 Figma에 디자인된 화면을 프레임 단위로 가져올 수 있습니다.
- 각 Figma 화면마다 원하는 API들을 매칭하여 화면별 필요한 API를 가시화하였습니다.
- 개발된 API를 테스트하고 프론트에서 요청하는 axios 코드를 생성할 수 있습니다.

## 프론트엔드 기술 스택

| <img src=${react.src} alt=${react.alt} /> | React |
| :---: | :---: |
| <img src=${nextjs.src} alt=${nextjs.alt} /> | Next.js |
| <img src=${ts.src} alt=${ts.alt} /> | Typescript |
| <img src=${redux.src} alt=${redux.alt} /> | Redux |
| <img src=${reactQuery.src} alt=${reactQuery.alt} /> | React Query |
| <img src=${tailwind.src} alt=${tailwind.alt} /> | Tailwind |

## 맡은 역할
~~**요약** 워크스페이스 홈화면 구현, 화면별 API 연결 구현, axios 요청 객체코드 반환 구현, 테스트 자동화 페이지 구현~~

### [ 화면벌 API 구현 ]

## 프로젝트 성과
서비스의 실용성을 인정받아 **삼성 청년 SW 아카데미(SSAFY) 8기 자율프로젝트 우수상**을 수여하였습니다.
`;

// ## 프로젝트 리뷰

const icon = { src: SsafastLogo1, alt: 'ssafast logo' };

const data = {
  name: 'SSAFAST',
  icon,
  text,
};

export default data;

