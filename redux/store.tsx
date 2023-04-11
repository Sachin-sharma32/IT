import { configureStore } from "@reduxjs/toolkit";
import baseReducer from "./slices";

const store = configureStore({
    reducer: {
        base: baseReducer,
    },
});

export default store;
