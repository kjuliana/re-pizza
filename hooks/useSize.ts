import {useGetPizzaQuery} from "../store/pizza.api";
import {SizeGroup} from "../models/models";

export const useSize = (id: number): SizeGroup => {
    const {data, isLoading} = useGetPizzaQuery('pizza');

    if (isLoading) return {
        size: 0,
        name: '',
        shortName: ''
    };

    return data.productSchemes.sizeSchemes[2].sizeGroups.find(obj => obj.size === id);
}