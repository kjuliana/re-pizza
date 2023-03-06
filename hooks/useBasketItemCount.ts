import {useAppSelector} from "./redux";

export const useBasketItemCount = () => {
    const basket = useAppSelector(state => state.basket);

    let basketCount = 0;

    for (let productId in basket) {
        for (let shoppingId in basket[productId]) {
            basketCount += basket[productId][shoppingId];
        }
    }

    return basketCount;
}