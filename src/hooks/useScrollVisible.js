import { useEffect, useState } from 'react';
import useScrollPosition from './useScrollPosition';

const useScrollVisible = (percent) => {
  const scrollPosition = useScrollPosition();
  const [state, setState] = useState(true);

  useEffect(() => {
    console.log('현재스크롤', scrollPosition);
    if (
      scrollPosition &&
      scrollPosition > window.innerHeight * (percent / 100)
    ) {
      setState(true);
    } else {
      setState(false);
    }
  }, [scrollPosition, percent]);

  return state;
};

export default useScrollVisible;

