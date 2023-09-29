// theme.ts
import { createTheme, Theme } from '@mui/material/styles';

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1c2826', // Update this color as per your preference
    },
    secondary: {
      main: '#e49435', // Update this color as per your preference
    },
    background: {
      default: '#fffcf7', // Update this color as per your preference
    },
  },
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fffcf7', // Update this color as per your preference
    },
    secondary: {
      main: '#e49435', // Update this color as per your preference
    },
    background: {
      default: '#1c2826', // Update this color as per your preference
    },
  },
});
