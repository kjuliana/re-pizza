import {useAppSelector} from "./redux";
import {Product} from "../models/models";

export const useBasketItems = (productsList: Product[]) => {
    const basket = useAppSelector(state => state.basket);
    const basketItems = [];

    if (!productsList.length) return basketItems;

    for (let productId in basket) {
        const item = productsList.find(item => item.id === productId);
        for (let shoppingItemId in basket[productId]) {
            const shoppingItem = item.shoppingItems.find(item => item.id === shoppingItemId);
            basketItems.push(
                {
                    id: productId,
                    name: item.name,
                    image: item.image.url,
                    shoppingItemId: shoppingItemId,
                    cost: basket[productId][shoppingItemId] * shoppingItem.price,
                    dough: shoppingItem.dough,
                    size: shoppingItem.size,
                    count: basket[productId][shoppingItemId]
                }
            )
        }
    }

    return basketItems;
}