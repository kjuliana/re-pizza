import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBasket, IBasketIds} from "../models/models";

const BASKET_KEY = 'basket';

type BasketState = IBasket;

const initialState: BasketState = {};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addBasket(state, action: PayloadAction<IBasketIds>) {
            state[action.payload.id] ??= {};
            state[action.payload.id][action.payload.shoppingItemId] ??= 0;
            state[action.payload.id][action.payload.shoppingItemId] += 1
            localStorage.setItem(BASKET_KEY, JSON.stringify(state));
        },
        removeBasket(state, action: PayloadAction<IBasketIds>) {
            state[action.payload.id][action.payload.shoppingItemId] -= 1;
            if (state[action.payload.id][action.payload.shoppingItemId] < 1) {
                delete state[action.payload.id][action.payload.shoppingItemId];
            }
            if (Object.keys(state[action.payload.id]).length === 0) {
                delete state[action.payload.id];
            }
            localStorage.setItem(BASKET_KEY, JSON.stringify(state));
        },
        removeAllBasket(state) {
            for ( let i in state) {
                delete state[i]
            }
            localStorage.removeItem(BASKET_KEY);
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