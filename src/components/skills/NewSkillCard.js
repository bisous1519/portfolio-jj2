import styled from '@emotion/styled';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import { BsCircle } from 'react-icons/bs';
import { PiCircleBold } from 'react-icons/pi';

const SkillCardsBox = styled.article`
  /* border: 1px solid red; */
  break-inside: avoid;
  padding: 20px;
  /* border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadowColor}; */
  /* margin: 40px 0px; */
  margin-bottom: 40px;
  display: flex;
  gap: 20px;
  & > div.skillImg {
    & > div {
      width: 60px;
      height: 60px;
      border-radius: 10px;
      overflow: hidden;
      & > img {
        width: 100%;
        height: 100%;
        object-jit: cover;
      }
    }
  }
  & > div.skillDes {
    flex: 1;
    & > div.title {
      margin-bottom: 20px;
      & > p {
        font-size: ${({ theme }) => theme.fontSize.subTitle};
        color: ${({ theme }) => theme.textColor.initial};
        margin-bottom: 20px;
      }
      & > ul.bar {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 4px;
        & > li {
          width: 25px;
          height: 6px;
          border-radius: 3px;
          background-color: ${({ theme }) => theme.textColor.lightGray};
          &.fill {
            background-color: ${({ theme }) => theme.textColor.lightPrimary};
          }
        }
      }
    }
    & > ul.des {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      & > li {
        line-height: 28px;
        color: ${({ theme }) => theme.textColor.gray};
        /* font-size: ${({ theme }) => theme.fontSize.base}; */
        display: flex;
        & > i {
          font-size: 7px;
          margin-right: 7px;
          width: 10px;
          height: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > p {
          flex: 1;
        }
      }
    }
  }
`;

export default function NewSkillCard({ data }) {
  const fadeinAnimation = useScrollFadeIn();
  return (
    <SkillCardsBox {...fadeinAnimation}>
      <div className='skillImg'>
        <div>
          <img src={data.icon.src} alt={data.icon.alt} />
        </div>
      </div>
      <div className='skillDes'>
        <div className='title'>
          <p>{data.name}</p>
          <ul className='bar'>
            {new Array(data.lv).fill(null).map(() => (
              <li className='fill'></li>
            ))}
            {new Array(5 - data.lv).fill(null).map(() => (
              <li></li>
            ))}
          </ul>
        </div>
        <ul className='des'>
          {data.des.map((line, idx) => (
            <li key={`${data.id}-${idx}`}>
              <i>
                <PiCircleBold />
              </i>
              <p>{line}</p>
            </li>
          ))}
        </ul>
      </div>
    </SkillCardsBox>
  );
}

