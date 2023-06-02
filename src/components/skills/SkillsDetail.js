import styled from '@emotion/styled';

const SkillsDetailContainer = styled.div`
  & > p {
    margin-bottom: 40px;
    font-size: ${({ theme }) => theme.fontSize.subTitle};
    color: ${({ theme }) => theme.textColor.primary};
  }
  & > div.skillgrid {
    columns: 2;
    gap: 30px;
    & > article {
      position: relative;
      /* border: 1px solid red; */
      break-inside: avoid;
      padding: 20px;
      border-radius: 10px;
      box-shadow: ${({ theme }) => theme.shadowColor};
      & + article {
        margin-top: 40px;
      }
      & > span {
        position: absolute;
        top: -10px;
        left: 0px;
        background-color: ${({ theme }) => theme.background}; // 지울거임 지워
      }
      & > ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;
        & > li {
        }
      }
    }
  }
`;

export default function SkillsDetail() {
  return (
    <SkillsDetailContainer>
      <p>Frontend</p>
      <div className='skillgrid'>
        <article>
          <span>Javascript</span>
          <ul>
            <li>ES6를 이해하고 있습니다.</li>
            <li>JS 기반의 라이브러리와 프레임워크를 사용할 수 있습니다.</li>
            <li>
              다양한 자료구조를 직접 구현하여 알고리즘 문제를 풀이할 수
              있습니다.
            </li>
          </ul>
        </article>
        <article>
          <span>Java</span>
          <ul>
            <li>
              기능별로 분류하여 API를 작성하여 클라이언트로부터 온 요청을 처리할
              수 있습니다. 다양한 자료구조를 활용하여 알고리즘 문제를 풀이할 수
              있습니다.
            </li>
          </ul>
        </article>
        <article>
          <span>Spring Boot</span>
          <ul>
            <li>
              Spring Boot의 장점을 이해하고 활용할 수 있습니다. 자동화된 테스트
              환경을 활용해 Unit 단위로 코드를 테스트할 수 있습니다.
            </li>
          </ul>
        </article>
        <article>
          <span>MySQL</span>
          <ul>
            <li>
              SQL문을 통해 테이블을 조회하고 데이터를 변경할 수 있습니다. JOIN을
              통해 원하는 데이터를 얻을 수 있습니다.
            </li>
          </ul>
        </article>
        <article>
          <span>Github</span>
          <ul>
            <li>
              깃 컨벤션을 지키려 노력합니다. branch 분기를 통해 협업할 수
              있습니다. 코드의 변경사항을 추적하고 관리하는 등 버전 관리를 할 수
              있습니다.
            </li>
          </ul>
        </article>
        <article>
          <span>Jira</span>
          <ul>
            <li>
              에자일 방법론을 이해하고 에자일하게 개발할 수 있습니다. 카드를
              생성하고 스프린트를 시작하여 일정을 체계적으로 관리할 수 있습니다.
              시각화된 데이터들을 이해하고 진행사항을 파악하여 효율적으로 협업할
              수 있습니다.
            </li>
          </ul>
        </article>
      </div>
    </SkillsDetailContainer>
  );
}

