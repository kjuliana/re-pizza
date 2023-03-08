import {useGetPizzaQuery} from "../store/pizza.api";
// import {useProducts} from "./useProducts";

export const useCategories = () => {
    const {data, isLoading} = useGetPizzaQuery('pizza');
    if (isLoading) return [];

    return data.menuCategories.filter((category) => {
        const itemsInCategory = data.items.filter((item) => item.menuCategoryId === category.id);
        return itemsInCategory.length
    })
}