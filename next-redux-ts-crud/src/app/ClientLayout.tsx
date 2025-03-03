// "use client" directive at the top of the file
"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, RootState } from "@/state/index"; // Import the Redux store
import { AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
// import { Menu as MenuIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from "./theme";
import Navbar from "@/components/Navbar";
import { toggleDrawer } from "@/state/uiSlice";
import Sidebar from "@/components/Sidebar";

// Sidebar width constant
const drawerWidth = 240;

function AppLayout({ children }: { children: React.ReactNode }) {
  const dispatch: AppDispatch = useDispatch();
  const { isDrawerOpen, isDarkMode } = useSelector((state: RootState) => state.ui); // Access UI state from Redux

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode])

  return (
    <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
      <Box sx={{ display: 'flex' }}>
        {/* App Bar */}
        <Navbar />

        {/* Side Drawer */}

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            display: "flex",
            flexDirection: "row",
            // padding: 3,
            marginTop: 8, // To prevent the content from being hidden under the AppBar
          }}
        >
          <Sidebar />
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
