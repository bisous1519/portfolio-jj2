const size = {
  mobile: '770px',
  tablet: '1024px',
  desktop: '1700px',
};

const calcRem = (size) => `${size / 16}rem`;

const theme = {
  light: {
    mainBackground: '#e4f2f2',
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
    // lineColor: '#e2e2e2',
    lineColor: '#d9d9d9',
    projectModal: {
      quoteLine: '#e5e5e5',
      topLine: '#ebebeb',
      etcLine: '#dbdbdb',
      summaryBackground: '#e9e9e9',
      summaryAfter: '#0000001f',
    },
    shadowColor: '1px 1px 3px rgba(0, 0, 0, 0.2)',
    layerColor: 'rgba(115, 115, 115, 0.4)',
    fontSize: {
      smaller: calcRem(12),
      small: calcRem(14),
      base: calcRem(16),
      lg: calcRem(18),
      xl: calcRem(20),
      subTitle: calcRem(23),
      tititle: calcRem(25),
      title: calcRem(30),
      xxl: calcRem(45),
      xxxl: calcRem(60),
    },
    fontWeight: {
      light: 300,
      base: 300,
      bold: 600,
      bolder: 800,
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
    layoutPadding: {
      mobile: '30px',
      desktop: '50px',
    },
  },
  dark: {
    mainBackground: '#393939',
    background: '#2B2B2B', // '#121212',
    textColor: {
      lightPrimary: '#5dd5cd',
      primary: '#01BFB1',
      initial: '#FCFCFC',
      reverse: '#2B2B2B',
      lightGray: '#9C9C9C',
      // gray: '#424242',
      gray: '#cccccc',
      darkGray: '#333333',
      light: '#FCFCFC',
      dark: '#2B2B2B',
    },
    lineColor: '#424242',
    projectModal: {
      quoteLine: '#575757',
      topLine: '#5b5b5b',
      etcLine: '#4e4e4e',
      summaryBackground: '#474747',
      summaryAfter: '#ffffff3d',
    },
    shadowColor: '1px 1px 3px rgba(128, 128, 128, 0.5)',
    layerColor: 'rgba(115,115,115,0.4)',
    fontSize: {
      smaller: calcRem(12),
      small: calcRem(14),
      base: calcRem(16),
      lg: calcRem(18),
      xl: calcRem(20),
      subTitle: calcRem(23),
      tititle: calcRem(25),
      title: calcRem(30),
      xxl: calcRem(45),
      xxxl: calcRem(60),
    },
    fontWeight: {
      light: 300,
      base: 300,
      bold: 600,
      bolder: 800,
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
    layoutPadding: {
      mobile: '30px',
      desktop: '50px',
    },
  },
};

export default theme;

