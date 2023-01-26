import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMilkFilter } from "../../models/IMilk";

const initialState: IMilkFilter = {
    filter: '',
} 

export const filterSlice = createSlice({
    name: 'milkFilter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        },
    },
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer