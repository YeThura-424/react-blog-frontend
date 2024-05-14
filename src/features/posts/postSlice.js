import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await fetch("https://dummyjson.com/todos");
  console.log(response);
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
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log(state);
      state.data.push(action.payload);
    });
  },
});

export default postSlice.reducer;
