import { useCallback, useEffect, useRef } from 'react';

const useScrollFadeIn = ({ direction = 'up', duration = 1, delay = 0 }) => {
  const dom = useRef();

  const handleDirection = (dir) => {
    switch (dir) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;

      if (entry.isIntersecting) {
        // 원하는 이벤트!
        current.style.transitionProperty = 'opacity transform';
        current.style.transitionDuration = `${duration}s`;
        // current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      }
      //   else {
      //     current.style.transitionProperty = 'opacity transform';
      //     // current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      //     current.style.opacity = 0;
      //     current.style.transform = handleDirection(direction);
      //   }
    },
    [direction, delay, duration]
  );

  useEffect(() => {
    const { current } = dom;

    let observer;
    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0,
        // rootMargin: '-50px',
      });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);
  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;

