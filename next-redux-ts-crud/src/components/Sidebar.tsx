import {  RootState } from '@/state';
import { Stack, Typography } from '@mui/material'
import React, { CSSProperties } from 'react'
import {  useSelector } from 'react-redux';

type Props = {}

const drawerWidth = 240;

const Sidebar = (props: Props) => {
    const { isDrawerOpen, isDarkMode } = useSelector((state: RootState) => state.ui); // Access UI state from Redux

    // Dynamically set the transition duration and the width based on the state
    const sidebarStyle: CSSProperties = {
        minWidth: isDrawerOpen ? drawerWidth : 50,
        transition: 'min-width 0.3s ease-in-out', // Smooth sliding transition
        minHeight: '100vh',
        borderRight: '1px solid white'
    };
    return (
        <Stack style={sidebarStyle}>
            <Typography>fdsaf</Typography>
        </Stack>
    )
}

export default Sidebar