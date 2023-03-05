import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    search: ''
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        }
    }
})

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;