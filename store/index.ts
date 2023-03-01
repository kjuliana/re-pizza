import {configureStore} from "@reduxjs/toolkit";
import {githubAPI} from "./github/github.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {githubReducer} from "./github/github.slice";

export const store = configureStore({
    reducer: {
        [githubAPI.reducerPath]: githubAPI.reducer,
        github: githubReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubAPI.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>