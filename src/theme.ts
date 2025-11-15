import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1E3A5F',      // Navy blue (matches --main-color)
      dark: '#152945',       // Darker navy (matches --main-hover)
      light: '#2C5082',
    },
    secondary: {
      main: '#9B6B9E',       // Soft purple for women's choir
      dark: '#7A4D7D',
      light: '#B88FBB',
    },
    warning: {
      main: '#D4A574',       // Gold/amber for men's choir (matches --accent-gold)
      dark: '#B8885B',
      light: '#E0BF95',
    },
    background: {
      default: '#FAFBFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1F36',    // Matches --text-color
      secondary: '#5A6478',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});
