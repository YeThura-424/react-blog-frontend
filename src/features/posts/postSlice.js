import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchPosts = createAsyncThunk("getPosts", async () => {
  const response = await fetch("http://localhost/posts");
  return response;
});

const initialState = {
  data: [],
  loading: "idle",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPosts.fulfilled, (state, action) => {
      // Add user to the state array
      state.posts.push(action.payload);
    });
  },
});
