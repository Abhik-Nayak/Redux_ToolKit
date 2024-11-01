import { configureStore,createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState ={
    loading: false,
    users: [],
    error: ""
}

// create Async thunk
const fetchUsers = createAsyncThunk('users/fetch',async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data.map(user=>user);
})

// create slice
const userSlice = createSlice({
        name: 'users',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchUsers.pending,(state) =>{
                    state.loading = true;
                })
                .addCase(fetchUsers.fulfilled, (state,action)=>{
                    state.loading = false;
                    state.users = action.payload;
                    state.error = ''
                })
                .addCase(fetchUsers.rejected,(state, action)=>{
                    state.loading = false;
                    state.users = [];
                    state.error = action.error.message;
                })
        }
});


// Configure store
const store = configureStore({
    reducer:{
        users: userSlice.reducer
    }
})

// Subscribe to store updates
store.subscribe(()=>{
    console.log(store.getState());
})

// Dispatch the async action
store.dispatch(fetchUsers())