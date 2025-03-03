// "use client" directive at the top of the file
"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, RootState } from "@/state/index"; // Import the Redux store
import { AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
// import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { toggleDarkMode, toggleDrawer } from "@/state/uiSlice";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Sidebar width constant
const drawerWidth = 240;

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function AppLayout({ children }: { children: React.ReactNode }) {
  const dispatch: AppDispatch = useDispatch();
  const { isDrawerOpen, isDarkMode } = useSelector((state: RootState) => state.ui); // Access UI state from Redux



  // Toggle the drawer open/close
  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };
  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode()); // Dispatch action to toggle dark mode
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        {/* App Bar */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap>
              My Application
            </Typography>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDarkModeToggle}
            // sx={{ mr: 2, display: { sm: 'none' } }}
            >
              {isDarkMode ? <Sun /> : <Moon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Side Drawer */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="temporary"
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
        >
          <Box sx={{ width: 250 }}>
            {/* Add side drawer content here */}
            <Typography variant="h6" sx={{ p: 2 }}>
              Drawer Content
            </Typography>
            {/* Add navigation items or other content */}
          </Box>
        </Drawer>

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // // bgcolor: isDarkMode ? 'black' : 'white',
            // bgcolor: (theme) => theme.palette.background.default,
            padding: 3,
            marginTop: 8, // To prevent the content from being hidden under the AppBar
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {

  return (
    <Provider store={store}>
      <AppLayout>{children}</AppLayout>
    </Provider>
  );
}
