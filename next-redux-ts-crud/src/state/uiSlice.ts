import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isDrawerOpen: boolean;
  isDarkMode: boolean;
}

const initialState: UIState = {
  isDrawerOpen: false,
  isDarkMode: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleDrawer(state) {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
    setDrawerOpen(state, action: PayloadAction<boolean>) {
      state.isDrawerOpen = action.payload;
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleDrawer, setDrawerOpen, toggleDarkMode, setDarkMode } = uiSlice.actions;
export default uiSlice.reducer;
