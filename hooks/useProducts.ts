import {useGetPizzaQuery} from "../store/pizza.api";
import {Product, ProductFromProducts} from "../models/models";

export const useProducts = () => {
    const {data, isLoading} = useGetPizzaQuery('pizza');

    if (isLoading) return [];

    const productMap = {};

    const products: ProductFromProducts[] = data.products;

    for (let product of products) {
        productMap[product.id] = product;
    }

    const items: Product[] = data.items;

    const result = [];

    for (let item of items) {
        let newItem = {};
        if (item.category === "Pizza") {
            const newShoppingItems = [];
            for (let shoppingItem of item.shoppingItems) {
                let newShoppingItem = {...shoppingItem, doughId: 0, sizeId: 0}
                newShoppingItem.doughId = productMap[shoppingItem.productId].dough;
                newShoppingItem.sizeId = productMap[shoppingItem.productId].sizeGroup;
                newShoppingItems.push(newShoppingItem);
            }
            newItem = {...item, shoppingItems: newShoppingItems};
            result.push(newItem);
        }
        result.push(item)
    }
    console.log(result);

    return data.items;
}