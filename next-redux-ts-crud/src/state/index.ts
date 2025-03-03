// src/state/index.ts (store.ts)

import { configureStore } from '@reduxjs/toolkit';
import { api } from './api'; // API service (we'll create it later)
import uiReducer from './uiSlice'; // Import the UI slice reducer

const store = configureStore({
  reducer: {
    // Add RTK Query api reducer
    [api.reducerPath]: api.reducer,
    // Add the UI reducer to manage isDrawerOpen and isDarkMode
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Add RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
