import { VscGithubAlt } from 'react-icons/vsc';
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoHomeOutline,
} from 'react-icons/io5';

const contact = [
  {
    id: 1,
    href: 'mailto:anipap2@naver.com',
    target: '',
    rel: '',
    icon: <IoMailOutline />,
    contact: 'anipap2@naver.com',
    moveIcon: true,
  },
  {
    id: 5,
    href: 'mailto:bisous1519@gmail.com',
    target: '',
    rel: '',
    icon: <IoMailOutline />,
    contact: 'bisous1519@gmail.com',
    moveIcon: true,
  },
  {
    id: 2,
    href: 'tel:010-3566-0340',
    target: '',
    rel: '',
    icon: <IoPhonePortraitOutline />,
    contact: '010.3566.0340',
    moveIcon: true,
  },
  {
    id: 3,
    href: 'https://bit.ly/eomjii',
    target: '_blank',
    rel: 'noreferrer',
    icon: <IoHomeOutline />,
    contact: '노션',
    moveIcon: true,
  },
  {
    id: 4,
    href: 'https://github.com/bisous1519',
    target: '_blank',
    rel: 'noreferrer',
    icon: <VscGithubAlt />,
    contact: '깃허브',
    moveIcon: true,
  },
];

export default contact;

