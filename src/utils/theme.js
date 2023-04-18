const size = {
  mobile: '770px',
  tablet: '1024px',
  desktop: '1700px',
};

const calcRem = (size) => `${size / 16}rem`;

const theme = {
  light: {
    background: '#FCFCFC',
    textColor: {
      lightPrimary: '#5dd5cd',
      primary: '#01BFB1',
      initial: '#2B2B2B',
      reverse: '#FCFCFC',
      lightGray: '#9C9C9C',
      gray: '#424242',
      darkGray: '#333333',
      light: '#FCFCFC',
      dark: '#2B2B2B',
    },
    shadowColor: '1px 1px 3px rgba(0, 0, 0, 0.2)',
    layerColor: 'rgba(115, 115, 115, 0.4)',
    fontSize: {
      small: calcRem(12),
      base: calcRem(14),
      lg: calcRem(16),
      xl: calcRem(18),
      xxl: calcRem(55),
    },
    fontWeight: {
      base: 400,
      bold: 500,
      bolder: 600,
    },
    viewPortSize: {
      mobile: `(max-width: ${size.mobile})`,
      tablet: `(max-width: ${size.tablet})`,
      desktop: `(max-width: ${size.desktop})`,
    },
    size: {
      mobile: `${size.mobile}`,
      tablet: `${size.tablet}`,
      desktop: `${size.desktop}`,
    },
  },
  dark: {
    background: '#2B2B2B', // '#121212',
    textColor: {
      primary: '#01BFB1',
      initial: '#FCFCFC',
      reverse: '#2B2B2B',
      lightGray: '#9C9C9C',
      gray: '#424242',
      darkGray: '#333333',
      light: '#FCFCFC',
      dark: '#2B2B2B',
    },
    shadowColor: '1px 1px 3px rgba(200, 200, 200, 0.5)',
    layerColor: 'rgba(115,115,115,0.4)',
    fontSize: {
      small: calcRem(12),
      base: calcRem(14),
      lg: calcRem(16),
      xl: calcRem(18),
      xxl: calcRem(20),
    },
    fontWeight: {
      base: 400,
      bold: 500,
      bolder: 600,
    },
    viewPortSize: {
      mobile: `(max-width: ${size.mobile})`,
      tablet: `(max-width: ${size.tablet})`,
      desktop: `(max-width: ${size.desktop})`,
    },
    size: {
      mobile: `${size.mobile}`,
      tablet: `${size.tablet}`,
      desktop: `${size.desktop}`,
    },
  },
};

export default theme;

