import {useGetPizzaQuery} from "../store/pizza.api";

export const useGetCategories = () => {
    const {data, isLoading} = useGetPizzaQuery('pizza');

    if (isLoading) return [];

    return data.menuCategories.filter((category) => {
        const items = data.items.filter((item) => item.menuCategoryId === category.id);
        return items.length;
    });
}