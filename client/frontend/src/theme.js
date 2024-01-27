import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800', // a vibrant orange
      light: '#ffc947', // a lighter orange
      dark: '#c66900', // a darker shade of orange
    },
    secondary: {
      main: '#03a9f4', // a clear sky blue
      light: '#67daff', // a lighter, airy blue
      dark: '#007ac1', // a deeper blue, like the ocean
    },
    tertiary: {
        main: '#13cc0c', // green
        light: '#30e3a4', //
        dark: '#73ad40', //
      },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    divider: 'rgba(255, 255, 255, 0.12)', // a subtle divider for light backgrounds
    background: {
      default: '#f7f9fc', // a very light grey, almost white, for the background
      paper: '#ffffff', // pure white for paper elements
    },
    text: {
      primary: '#212121', // very dark (almost black) for primary text
      secondary: '#757575', // medium dark for secondary text
      disabled: 'rgba(0, 0, 0, 0.38)', // disabled text color
    },
  },
  // ... you can also customize typography, breakpoints, etc.
});

export default theme;