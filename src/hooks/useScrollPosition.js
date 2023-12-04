import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = throttle(() => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }, 300);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [updateScroll]);

  return scrollPosition;
};

export default useScrollPosition;

