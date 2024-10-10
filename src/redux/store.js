import { configureStore } from "@reduxjs/toolkit";
import memorySlice from "./game/memorySlice";

export const store = configureStore({
    reducer: memorySlice,
})