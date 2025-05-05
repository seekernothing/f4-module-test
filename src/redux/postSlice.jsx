import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts=createAsyncThunk('posts/fetchPosts', async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
});

const postSlice=createSlice({
    name:'Posts',
    initialState:{posts:[],status:'idle'},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.pending,(state)=>{state.status='loading'})
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.status='succeeded';
            state.posts=action.payload;
        })
        .addCase(fetchPosts.rejected,(state)=>{state.status='failed'});
    },
});

export default postSlice .reducer;