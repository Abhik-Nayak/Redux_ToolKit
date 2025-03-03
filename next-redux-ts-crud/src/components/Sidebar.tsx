import { AppDispatch, RootState } from '@/state';
import { toggleDrawer } from '@/state/uiSlice';
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

type Props = {}

const drawerWidth = 240;

const Sidebar = (props: Props) => {
    const dispatch: AppDispatch = useDispatch();
    const { isDrawerOpen, isDarkMode } = useSelector((state: RootState) => state.ui); // Access UI state from Redux

    const handleDrawerToggle = () => {
        dispatch(toggleDrawer());
    };
    return (
        <Box width={drawerWidth} border="1px solid black">
            <Typography>asdas</Typography>
        </Box>
    )
}

export default Sidebar