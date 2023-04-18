import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const systemTheme = () => {
  let theme =
    typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
  if (!theme) {
    const { matches } = window.matchMedia('(preferes-color-scheme:dark');
    theme = matches ? 'dark' : 'light';
  }
  return theme;
};

const ThemeStateContext = createContext(null);
const ThemeToggleContext = createContext(null);

export default function ModeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    currentTheme === 'light'
      ? setCurrentTheme('dark')
      : setCurrentTheme('light');
  }, [currentTheme]);

  useEffect(() => {
    setCurrentTheme(systemTheme());
  }, []);
  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);
  return (
    <ThemeStateContext.Provider value={currentTheme}>
      <ThemeToggleContext.Provider value={toggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeStateContext.Provider>
  );
}

export function useThemeState() {
  const state = useContext(ThemeStateContext);
  return state;
}

export function useThemeToggle() {
  const toggle = useContext(ThemeToggleContext);
  return toggle;
}
