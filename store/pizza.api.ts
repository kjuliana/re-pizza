import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IDodoAPIResponse} from "../models/models";

export const pizzaAPI = createApi({
    reducerPath: 'pizza/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api'
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        getPizza: build.query<IDodoAPIResponse, string>({
            query: () => ({
                url: 'dodo'
            }),
        })
    })
})

export const {useGetPizzaQuery} = pizzaAPI;