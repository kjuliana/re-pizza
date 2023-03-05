import {useAppSelector} from "./redux";
import {useGetPizzaQuery} from "../store/pizza.api";

export const useBasketTotalCost = () => {
    const {basket} = useAppSelector(state => state);
    const {data, isLoading} = useGetPizzaQuery('pizza');
    let totalCount = 0;

    if (isLoading) return totalCount;

    for (let id in basket) {
        let price = data?.items.find(item => item.id === id).shoppingItems[0].price;
        totalCount += price*basket[id];
    }
    return totalCount
}