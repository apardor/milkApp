import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMilkFilter } from "../../models/IMilk";

const initialState: IMilkFilter = {
    filter: '',
    type: '',
} 

export const filterSlice = createSlice({
    name: 'milkFilter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        },
        setCheckBox: (state, action: PayloadAction<string>) => {
            state.type = action.payload
        }
    },
})

export const { setFilter, setCheckBox } = filterSlice.actions

export default filterSlice.reducer