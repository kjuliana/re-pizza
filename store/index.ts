import {configureStore} from "@reduxjs/toolkit";
import {githubAPI} from "./github/github.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {githubReducer} from "./github/github.slice";
import {basketReducer} from "./basket.slice";
import {catalogReducer} from "./catalog.slice";
import {pizzaAPI} from "./pizza.api";
import {searchReducer} from "./searchSlice";

export const store = configureStore({
    reducer: {
        [githubAPI.reducerPath]: githubAPI.reducer,
        github: githubReducer,
        basket: basketReducer,
        catalog: catalogReducer,
        [pizzaAPI.reducerPath]: pizzaAPI.reducer,
        search: searchReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pizzaAPI.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>