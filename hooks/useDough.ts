import {useGetPizzaQuery} from "../store/pizza.api";
import {DoughType} from "../models/models";

export const useDough = (id: number): DoughType => {
    const {data, isLoading} = useGetPizzaQuery('pizza');
    if (isLoading) return {
        dough: 0,
        name: '',
        shortName: ''
    };
    return data.productSchemes.doughSchemes[0].doughTypes.find(obj => obj.dough === id);
}