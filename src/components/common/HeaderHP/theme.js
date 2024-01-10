import { createTheme } from '@mui/material/styles';

// Create a custom MUI theme
const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#2F6C7E', // Set your desired primary color 2F6C7E
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Set your desired font family
  },
});

export default theme;