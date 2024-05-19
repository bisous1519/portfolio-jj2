import { MineLogo } from '../../assets/icons';
import { mineMain, mineGame, mineMain2 } from '../../assets/img';
import skillLogo from '../../data/skillLogo';

const { reactNative, ts, recoil } = skillLogo;

const text = `
<img src=${mineMain2} alt='thumbnail' />

>기간 : 24.04.12 - 24.04.16 (약 1주)
>인원 : 1명
>역할 : 기획 및 디자인, 개발
>기여도 : 100%
>깃허브 : <a href='https://github.com/bisous1519/minesweeper' target='_blank' rel='noreferrer'>지뢰 찾기</a>
___

### " 커스텀해서 즐기는
### 지뢰찾기 게임 "

**Mine sweeper**는,
보드 크기와 난이도를 커스텀할 수 있는 지뢰찾기 게임 앱입니다.
**bfs 알고리즘**을 개발에 적용해보고자 프로젝트를 진행하였습니다.

초기 환경 설정에 유리하고, 개발 중 모바일을 통해 실시간으로 변경 사항을
확인 할 수 있어 개발 속도가 빠를 것으로 기대하여 **expo**를 사용하여 개발하였습니다.

## 핵심 기능
- 난이도를 선택할 수 있습니다.
- 보드 크기, 지뢰 개수를 유저 마음대로 설정할 수 있습니다.
- 보드 칸을 길게 눌러 깃발을 꽂을 수 있습니다.
- 칸을 누르면 타이머가 시작됩니다.
- 게임이 종료되면 성공 여부, 걸린 시간, 플래깅 여부가 표시됩니다.

## 프론트엔드 기술 스택

| <img src=${reactNative.src} alt=${reactNative.alt} /> | React Native |
| :---: | :---: |
| <img src=${ts.src} alt=${ts.alt} /> | Typescript |
| <img src=${recoil.src} alt=${recoil.alt} /> | Recoil |


## 구현 내용
~~**요약** 난이도 선택 / 게임 구현~~

### [ 난이도 선택 ]
<img src=${mineMain} alt='main page' />
- Beginner, Intermediate, Expert 세 개의 난이도 중에서 선택할 수 있습니다.
- 그 외에 보드의 가로, 세로 길이를 직접 설정할 수 있습니다.
- 지뢰의 개수를 조절하여 난이도를 조정할 수 있도록 구현하였습니다.

### [ 게임 구현 ]
<img src=${mineGame} alt='game page' />
- **useEffect 훅**을 이용하여, 게임 화면으로 이동 시 랜덤한 위치에 지뢰를 심어 맵을 구성하였습니다.
**Math.random() 함수**를 사용하여 지뢰의 위치를 지정하였습니다.
- 칸을 여는데에 **bfs 알고리즘**을 사용하였습니다.
사용자가 클릭한 칸이 빈칸이라면, 현재 눌린 칸의 상하좌우로 인접한 칸이 숫자일 때 까지 모두 열리도록 하였습니다.
- 게임 보드와 관련된 모든 로직은 **커스텀 훅**으로 구현하였습니다.
이로써 컴포넌트를 구성하는 코드와 분리시키고, 관련 코드만 모아두어 코드 가독성을 높였습니다.
- 스마일 버튼을 누르면 **bottom sheet**를 통해 난이도를 조절하여 새 게임을 시작할 수 있습니다.

## 프로젝트 회고
- 짧은 기간 동안 진행한 프로젝트인 만큼, 개발에서 알고리즘을 적용해보고자 하는 확실한 목적을 가지고 시작한 프로젝트였고 bfs를 이용하여 구현함으로써 **목적을 달성**하게 되어 기쁩니다.
- 프로젝트를 진행하며 bfs로 주변 빈 칸을 탐색하고 보드의 상태를 변경하는 과정에서 **시간 복잡도**를 가장 많이 신경썼습니다. 알고리즘이 한번 돌아갈 떄마다 배열에 방문 체크를 하여 중복 검사를 하지 않도록 하였습니다.
- 기회가 된다면, 지뢰를 클릭했을 때 클릭한 지뢰부터 가까운 지뢰로 퍼져나가며 순서대로 지뢰가 터지는 **애니메이션**을 추가하고 싶습니다.
`;

const icon = { src: MineLogo, alt: 'mine-sweeper logo' };

const data = {
  name: 'Mine sweeper',
  icon,
  text,
};

export default data;

