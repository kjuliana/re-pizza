import {useGetPizzaQuery} from "../store/pizza.api";
import {DoughType} from "../models/models";
import {useMemo} from "react";

export const useDough = (): {(id: string): string} => {
    const {data} = useGetPizzaQuery('pizza');

    const memoObj = useMemo(() => {
        const doughObj: Record<string, DoughType> = {};
        data.productSchemes.doughSchemes[0].doughTypes.forEach(doughType => doughObj[doughType.dough] = doughType);
        return doughObj;
    }, []);

    function formatDough(id: string): string {
        return memoObj[id].shortName;
    }

    return formatDough;
}