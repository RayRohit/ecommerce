import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Components/features/AuthSlice";
import { cartSlice } from "./Components/features/cartSlice";

export const store = configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        cart:cartSlice.reducer
    }
})