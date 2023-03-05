import {useGetPizzaQuery} from "../store/pizza.api";
import {useAppSelector} from "./redux";

export const useProducts = () => {
    const {data, isLoading} = useGetPizzaQuery('pizza');
    const {search} = useAppSelector((state) => state.pizza);

    if (isLoading) return [];

    // return data.items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    return data.items;
}