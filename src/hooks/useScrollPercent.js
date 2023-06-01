import { useContext, useEffect, useState } from 'react';
import { ScrollContext } from '../App';

const useScrollPercent = () => {
  const scrollPosition = useContext(ScrollContext);

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (scrollPosition) {
      setPercent(Math.floor((scrollPosition / window.innerHeight) * 100));
    }
  }, [scrollPosition]);

  return percent;
};

export default useScrollPercent;

