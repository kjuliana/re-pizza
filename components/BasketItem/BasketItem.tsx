import React from 'react';
import styles from "./BasketItem.module.css"
import ProductCounter from "../ProductCounter/ProductCounter";
import {useDough} from "../../hooks/useDough";
import {useSize} from "../../hooks/useSize";

export interface BasketItemProps {
    id: string,
    image: string,
    name: string,
    cost: number,
    shoppingItemId: string,
    dough?: number,
    size?: number
}

const BasketItem = ({id, image, name, cost, shoppingItemId, dough, size}: BasketItemProps) => {
    const formatDough = useDough();
    const formatSize = useSize();

    return (
        <div className={styles.root}>
            <div className={styles.information}>
                <img className={styles.image} src={image} alt={name}/>
                <div className={styles.nameWrapper}>
                    <div className={styles.name}>{name}</div>
                    {dough && <div className={styles.notes}>{formatDough(dough)}</div>}
                    {size && <div className={styles.notes}>{formatSize(size)}</div>}
                </div>
            </div>
            <div className={styles.options}>
                <ProductCounter id={id} shoppingItemId={shoppingItemId} isBasketItem={true}/>
            </div>
            <span className={styles.price}>{cost} ₽</span>
        </div>
    );
};

export default BasketItem;