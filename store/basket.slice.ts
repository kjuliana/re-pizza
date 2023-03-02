import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBasket} from "../models/models";

const BASKET_KEY = 'basket';

interface BasketState {
    basket: IBasket;
}

const initialState: BasketState = {
    basket: typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem(BASKET_KEY) ?? '{}') : {}
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket(state, action: PayloadAction<number>) {
            state.basket[action.payload] ??= 0;
            // state.basket[action.payload] = state.basket[action.payload] ?? 0;
            // state.basket[action.payload] = state.basket[action.payload] + 1 || 1;
            state.basket[action.payload] += 1;
            localStorage.setItem(BASKET_KEY, JSON.stringify(state.basket));
        },
        removeFromBasket(state, action: PayloadAction<number>) {
            // state.basket = state.basket?.filter(item => item.productId !== action.payload);
            // localStorage.setItem(BASKET_KEY, JSON.stringify(state.basket));
        }
    }
})

export const basketActions = basketSlice.actions;
export const basketReducer = basketSlice.reducer;