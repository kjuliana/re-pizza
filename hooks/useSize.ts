import {useGetPizzaQuery} from "../store/pizza.api";
import {SizeGroup} from "../models/models";
import {useMemo} from "react";

export const useSize = (): {(id: string): string} => {
    const {data} = useGetPizzaQuery('pizza');

    const memoObj = useMemo(() => {
        const sizeObj: Record<string, SizeGroup> = {};
        data.productSchemes.sizeSchemes[2].sizeGroups.forEach(sizeGroup => sizeObj[sizeGroup.size] = sizeGroup);
        return sizeObj;
    }, []);

    function formatSize(id: string): string {
        return memoObj[id].shortName;
    }

    return formatSize;
}