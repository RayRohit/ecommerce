import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Components/features/AuthSlice";

export const store = configureStore({
    reducer:{
        auth:AuthSlice.reducer
    }
})