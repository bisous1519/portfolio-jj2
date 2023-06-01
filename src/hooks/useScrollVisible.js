import { useContext, useEffect, useState } from 'react';
import { ScrollContext } from '../App';

const useScrollVisible = (percent) => {
  const scrollPosition = useContext(ScrollContext);

  const [state, setState] = useState(false);

  useEffect(() => {
    console.log(Math.floor((scrollPosition / window.innerHeight) * 100), '%');
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

export default useScrollVisible;

