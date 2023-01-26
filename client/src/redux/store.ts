import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        milkFilter:  filterSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store