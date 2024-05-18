import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await fetch("http://localhost:5000/post");
  console.log(response);
  return response.data;
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
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

export default postSlice.reducer;
