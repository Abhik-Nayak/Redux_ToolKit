import { AppDispatch, RootState } from '@/state';
import { toggleDarkMode, toggleDrawer } from '@/state/uiSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Box, CssBaseline, Drawer, IconButton, Menu, Stack, Toolbar, Typography } from "@mui/material";
import { MenuIcon, Moon, Sun } from 'lucide-react';

type Props = {}

const Navbar = (props: Props) => {
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
        <Stack position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'primary.main', borderBottom:"1px solid black" }}>
            <Toolbar sx={{width:"100vw"}}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                // sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
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
                    {isDarkMode ? <Moon /> : <Sun />}
                </IconButton>
            </Toolbar>
        </Stack>
    )
}

export default Navbar