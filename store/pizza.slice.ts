import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    search: ''
};

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        updateSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        }
    }
})

export const pizzaActions = pizzaSlice.actions;
export const pizzaReducer = pizzaSlice.reducer;