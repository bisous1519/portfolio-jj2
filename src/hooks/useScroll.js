import { useContext, useEffect, useState } from 'react';
import { ScrollContext } from '../App';

const useScroll = (percent) => {
  const scrollPosition = useContext(ScrollContext);

  const [state, setState] = useState(false);

  useEffect(() => {
    if (
      scrollPosition &&
      scrollPosition > window.innerHeight * (percent / 100)
    ) {
      setState(true);
    } else {
      setState(false);
    }
  }, [scrollPosition]);

  return state;
};

export default useScroll;

