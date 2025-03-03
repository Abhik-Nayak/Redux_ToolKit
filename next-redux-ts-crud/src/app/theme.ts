// src/theme.ts
import { createTheme } from '@mui/material/styles';

// Define the light and dark theme properties
// src/theme.ts
const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#f5f5f5', // Custom background color for light mode
      },
    },
  });
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary:{
        main: '#673ab7',
      },
      secondary: {
        main: '#512da8',
      },
      background: {
        default: '#121212', // Custom background color for dark mode
      },
    },
  });
  

export { lightTheme, darkTheme };
