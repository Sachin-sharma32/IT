import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: false,
    success: false,
    message: "",
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
    },
});

const { setError, setSuccess, setMessage } = baseSlice.actions;
export default baseSlice.reducer;
