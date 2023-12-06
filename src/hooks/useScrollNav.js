import { useCallback, useContext, useEffect, useRef } from 'react';
import { NavContext } from '../App';

const useScrollNav = (navName = 'intro') => {
  const { curNav, setCurNav } = useContext(NavContext);
  const dom = useRef();

  const navHandler = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        setCurNav({
          intro: false,
          skills: false,
          malicon: false,
          eeum: false,
          ssafast: false,
          etc: false,
          [navName]: true,
        });
      }
    },
    [navName, setCurNav]
  );

  useEffect(() => {
    console.log('!!!', navName, curNav);
  }, [navName, curNav]);

  useEffect(() => {
    const { current } = dom;

    let observer;
    if (current) {
      observer = new IntersectionObserver(navHandler, {
        threshold: 0,
        rootMargin: '-150px 0px',
      });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [navHandler]);
  return {
    ref: dom,
    id: navName,
  };
};

export default useScrollNav;

