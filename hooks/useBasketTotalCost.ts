import {useAppSelector} from "./redux";
import {useGetPizzaQuery} from "../store/pizza.api";

export const useBasketTotalCost = () => {
    const {basket} = useAppSelector(state => state);
    const {data, isLoading} = useGetPizzaQuery('pizza');
    let totalCount = 0;

    if (isLoading) return totalCount;

    for (let productId in basket) {
        for (let shoppingItemId in basket[productId]) {
            let price = data?.items.find(item => item.id === productId).shoppingItems.find(item => item.id === shoppingItemId).price;
            totalCount += price*basket[productId][shoppingItemId];
        }
    }

    return totalCount;
}