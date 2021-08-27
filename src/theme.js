import { createTheme as createMuiTheme } from '@material-ui/core/styles';
import { Theme } from '@emotion/react';



export const theme = {
  spacing: 4,
  palette: {
    primary: {
      main: '#04C4F2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1EEDCF',
    },
    info: {
      main: '#2d9cdb',
    },
    success: {
      main: '#27ae60',
    },
    warning: {
      main: '#f2c94c',
    },
    error: {
      main: '#eb5757',
    },
    grey: {
      50: '#fff',
      100: '#f2f2f2',
      200: '#e0e0e0',
      500: '#bdbdbd',
      700: '#828282',
      800: '#4f4f4f',
      900: '#333333 ',
    },
  },
  typography: {
    fontFamily: ['Lato, sans-serif'],
    fontWeigth: 400,
    fontSize: 14,
    lineHeight: '100%',
  },
  shape: {
    borderRadius: 4,
  },
};

export default theme;
