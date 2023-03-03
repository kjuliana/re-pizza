import {useAppSelector} from "./redux";

export const useTotalCount = () => {
    const {basket, catalog} = useAppSelector(state => state);
    let totalCount = 0;

    for (let id in basket) {
        let price = catalog.find(product => product.id === Number(id)).price;
        totalCount += price*basket[id];
    }
    return totalCount
}