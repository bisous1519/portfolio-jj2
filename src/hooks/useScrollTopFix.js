import { useCallback, useEffect, useRef } from 'react';

const useScrollTopFix = (direction = 'up', duration = 1, delay = 0) => {
  const dom = useRef();

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      //   console.log('!!!!', entry.boundingClientRect);

      if (entry.boundingClientRect.top <= 100) {
        // console.log('!!!!!!!!', current.style);
        // 원하는 이벤트!
        current.style.position = 'sticky';
        current.style.top = '10px';
        current.style.zIndex = '99999';
      } else {
        current.style.position = 'static';
        current.style.top = '0';
        current.style.zIndex = '0';
      }
    },
    [direction, delay, duration]
  );

  useEffect(() => {
    const { current } = dom;

    let observer;
    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 1,
      });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);
  return {
    ref: dom,
    style: {
      //   opacity: 0,
      //   transform: handleDirection(direction),
    },
  };
};

export default useScrollTopFix;

