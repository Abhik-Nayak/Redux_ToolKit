// // asyc-await
// Key Changes:

// Using @reduxjs/toolkit:
// This allows you to use configureStore, which is the recommended way to create a Redux store now.

// Using createAsyncThunk:
// This simplifies the process of creating async actions with built-in lifecycle handling (pending, fulfilled, rejected).

// Creating a Slice:
// The createSlice function helps manage state and reducers in a more organized manner.

// Benefits:
// The new approach with @reduxjs/toolkit provides a cleaner API and reduces boilerplate code.
// You avoid deprecation warnings while keeping the same functionality with async/await.
import { configureStore,createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import logger from "redux-logger";

// Initial State
const initialState = {
  loading: false,
  users: [],
  error: ''
};

// Create Async Thunk
const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data.map(user => user.id); // Return user IDs
});

// Create Slice
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = '';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      });
  }
});

// Configure Store
const store = configureStore({
  reducer: {
    users: userSlice.reducer
  }
});
// Configure Store with middleware
// const store = configureStore({
//     reducer: {
//       users: userSlice.reducer
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) // Add logger
//   });

// Subscribe to store updates
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch the async action
store.dispatch(fetchUsers());

