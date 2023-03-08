import {useGetPizzaQuery} from "../store/pizza.api";
import {SizeGroup} from "../models/models";
import {useMemo} from "react";

export const useSize = () => {
    const {data} = useGetPizzaQuery('pizza');

    const memoObj = useMemo(() => {
        const sizeObj: Record<string, SizeGroup> = {};
        data.productSchemes.sizeSchemes[2].sizeGroups.forEach(sizeGroup => sizeObj[sizeGroup.size] = sizeGroup);
        return sizeObj;
    }, []);

    function formatSize(id: number): string {
        return memoObj[String(id)].shortName;
    }

    return formatSize;
}