import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBasket} from "../models/models";

const BASKET_KEY = 'basket';

type BasketState = IBasket;

const initialState: BasketState = {};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket(state, action: PayloadAction<string>) {
            state[action.payload] ??= 0;
            state[action.payload] += 1;
            localStorage.setItem(BASKET_KEY, JSON.stringify(state));
        },
        removeBasket(state, action: PayloadAction<string>) {
            // state.basket[action.payload] = state.basket[action.payload] ?? 0;
            // state.basket[action.payload] = state.basket[action.payload] + 1 || 1;
            state[action.payload] -= 1;
            state[action.payload] === 0 && delete state[action.payload];
            localStorage.setItem(BASKET_KEY, JSON.stringify(state));
        },
        restore(state) {
            const restored = JSON.parse(window.localStorage.getItem(BASKET_KEY) ?? 'null');
            if (restored) {
                Object.assign(state,  restored);
            }
        }
    }
})

export const basketActions = basketSlice.actions;
export const basketReducer = basketSlice.reducer;