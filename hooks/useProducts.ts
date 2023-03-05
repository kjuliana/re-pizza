import {useGetPizzaQuery} from "../store/pizza.api";

export const useProducts = () => {
    const {data, isLoading} = useGetPizzaQuery('pizza');

    if (isLoading) return [];

    return data.items;
}