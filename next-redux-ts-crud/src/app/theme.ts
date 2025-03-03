// src/theme.ts
import { createTheme } from '@mui/material/styles';

// Define the light and dark theme properties
// src/theme.ts
const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#B4EBE6',
      },
      background: {
        default: '#fff', // Custom background color for light mode
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
