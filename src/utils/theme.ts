'use client';
import { Roboto } from 'next/font/google';
import { createTheme, ThemeOptions, Shadows } from '@mui/material/styles';
// Perform module augmentation to add custom properties to the theme
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
  }
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 896,
    },
  },
  palette: {
    primary: {
      main: '#A170D0',
      dark: '#3A1063',
      contrastText: '#FFFCFF',
    },
    secondary: {
      main: '#A170D0',
      contrastText: '#CDB4E4',
    },
    background: {
      default: '#1D0634',
    },
  },
  components: {
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          border: '0px',
        },
      },
    },
  },
});
// general section header
theme.typography.h2 = {
  fontFamily: roboto.style.fontFamily,
  fontWeight: 500,
  fontSize: '72px',
  color: '#FFFCFF',
  [theme.breakpoints.only('mobile')]: {
    fontSize: '48px',
  },
} // general section content
theme.typography.body1 = {
  fontFamily: roboto.style.fontFamily,
  fontWeight: 400,
  fontSize: '36px',
  color: '#FFFCFF',
  [theme.breakpoints.only('mobile')]: {
    fontSize: '24px',
  },
}
// NavBar section header, footer section text
theme.typography.h3 = {
  fontFamily: roboto.style.fontFamily,
  fontWeight: 500,
  fontSize: '36px',
  color: '#FFFCFF',
  [theme.breakpoints.only('mobile')]: {
    fontSize: '30px',
  },
}
// Button label
theme.typography.button = {
  fontFamily: roboto.style.fontFamily,
  fontWeight: 500,
  fontSize: '36px',
  color: '#FFFCFF',
  [theme.breakpoints.only('mobile')]: {
    fontSize: '24px',
  },
}
// Card title
theme.typography.h4 = {
  fontFamily: roboto.style.fontFamily,
  fontWeight: 500,
  fontSize: '36px',
  color: '#FFFCFF',
  [theme.breakpoints.only('mobile')]: {
    fontSize: '24px',
  },
}
// Card content
theme.typography.body2 = {
  fontFamily: roboto.style.fontFamily,
  fontWeight: 300,
  fontSize: '24px',
  color: '#CCCCCC',
  [theme.breakpoints.only('mobile')]: {
    fontSize: '20px',
  },
}

// disable all default shadows
const defaultShadows: ThemeOptions['shadows'] = [...theme.shadows];
theme.shadows =  defaultShadows.map(() => 'none') as Shadows

export default theme;