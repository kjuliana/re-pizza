import {useGetPizzaQuery} from "../store/pizza.api";
import {IDodoAPIResponse, Product, ProductFromProducts} from "../models/models";

const convert = (data: IDodoAPIResponse): Product[] => {
    const productMap: Record<string, ProductFromProducts> = {};

    for (let product of data.products) {
        productMap[product.id] = product;
    }

    return data.items.map((item) => {
        const newItem = {...item};
        newItem.shoppingItems = item.shoppingItems.map((shoppingItem) => {
            const product = productMap[shoppingItem.productId];
            return {
                ...shoppingItem,
                dough: product.dough ?? 0,
                size: product.sizeGroup ?? 0
            }
        });
        return newItem;
    });

}

export const useProducts = () => {
    const {data, isLoading} = useGetPizzaQuery('pizza');
    if (isLoading) return [];

    return convert(data);
}