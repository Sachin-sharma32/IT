import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  success: false,
  message: "",
  posts: [],
  cursorVisible: true,
};

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
      console.log(state.posts);
    },
    setCursorVisible: (state, action) => {
      state.cursorVisible = action.payload;
      console.log(state.cursorVisible);
    },
  },
});

export const { setError, setSuccess, setMessage, setPosts, setCursorVisible } =
  baseSlice.actions;
export default baseSlice.reducer;
