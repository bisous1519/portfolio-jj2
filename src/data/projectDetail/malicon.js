const data = `
# MALICON
![image](https://velog.velcdn.com/images/bisous1519/post/c6b44c8a-439c-4e37-b36b-e03f1adfa5f4/image.png)

**기간** : 23.01.02 ~ 23.02.17 (약 7주)
**인원** : 프론트엔드 2명(본인 포함), 백엔드 4명
___

**"아바타로 소통하는 아티스트와 나,
아바타로 표현하는 내 감정"**


'My Little Concert'의 줄임말인 **마리콘**은,
아티스트와 팬이 아바타를 통해 소통하는 실시간 방송 플랫폼입니다.



사용자마다 자기만의 아바타를 생성하여, 아티스트와 시청자들에게 '나'의 존재를 알리고, 실시간으로 느끼고 있는 감정을 고스란히 전할 수 있도록 구현하였습니다.
아티스트는 아바타 위 이모지를 통해 팬들의 웃는 표정이나 응원봉을 흔드는 모습을 직접적으로 볼 수 있습니다.

## 기획 배경
**마리콘은 기존 실시간 방송의 소통 패러다임을 변화시키고자 개발되었습니다.**
인-타, 유-브, 위-스 등을 통한 실시간 방송은 매우 보편화 되었지만, 기존의 플랫폼들은 소통의 매개체가 채팅으로 제약적입니다.
아티스트와 팬이 조금 더 직접적인 교류를 통해 실제 공연장처럼 실시간 교류할 수 있는 플랫폼을 개발하고자 하였습니다.

## 핵심 기능
- Openvidu를 활용한 webRTC 기능으로 실시간 방송이 가능합니다.
- 티처블머신을 활용하여 사용자의 행동 정보를 읽습니다.
- Tensorflow 위에 구현된 face-api를 활용하여 사용자의 표정 정보를 읽습니다.
- 피드를 통해 일상을 나누거나, 오프라인 공연 일시를 홍보할 수 있습니다.

## 프론트엔드 기술 스택
**React, Typescript, Redux, emotion**

## 맡은 역할
**요약** : 무한 스크롤, 실시간 채팅, 실시간 반응

**세부내용**

### 1.
Intersection Observer API를 이용하여 **무한 스크롤**을 구현하였습니다.
방송 리스트 페이지에 적용함으로써 리스트를 탐색하는 사용자의 흐름이 끊기지 않게 하였습니다.

### 2.
Openvidu를 통해, 사용자의 메세지 내용을 담은 시그널을 발생시켜 **실시간 채팅**을 구현하였습니다.

### 3.
face-api를 활용하여 읽은 표정 정보와 티처블머신을 활용하여 읽은 사용자의 행동 정보를 'happy', 'clab' 등의 단어로 정형화하였습니다. Openvidu를 통해, 해당 단어와 사용자 정보를 담은 시그널을 발생시킨 뒤, 해당 사용자의 아바타에 이모지를 띄워 **실시간 반응**을 구현하였습니다.

### 4.
keyframe을 이용한 애니메이션으로 역동적인 랜딩페이지를 구현하였습니다.

### 5.
keyframe을 이용한 애니메이션으로 동적인 로딩페이지를 구현하여, 실시간 방송 입장 중 이탈률을 낮추었습니다.

## 프로젝트 성과
아이디어의 독창성과 프로젝트 완성도를 인정받아 **'삼성 청년 SW 아카데미(SSAFY) 공통프로젝트 우수상'**을 수여하였습니다.

`;
// ## 프로젝트 리뷰

const data2 = `
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### 'yarn start'

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### 'yarn test'

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 'yarn build'

Builds the app for production to the 'build' folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 'yarn eject'

**Note: this is a one-way operation. Once you 'eject', you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can 'eject' at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except 'eject' will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use 'eject'. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### 'yarn build' fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
`;

export default data;

