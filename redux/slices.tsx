import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  success: false,
  message: "",
  posts: [],
  cursorVisible: true,
  hovering: false,
  hoveringRight: false,
  hoveringLeft: false,
  show: false,
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
    setHovering: (state, action) => {
      state.hovering = action.payload;
      console.log(state.hovering);
    },
    setHoveringRight: (state, action) => {
      state.hoveringRight = action.payload;
    },
    setHoveringLeft: (state, action) => {
      state.hoveringLeft = action.payload;
    },
    setShow: (state, active) =>{
      state.show = active.payload;
    }
  },
});

export const {
  setError,
  setSuccess,
  setMessage,
  setPosts,
  setCursorVisible,
  setHovering,
  setHoveringLeft,
  setHoveringRight,
  setShow
} = baseSlice.actions;
export default baseSlice.reducer;
