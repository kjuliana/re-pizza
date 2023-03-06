import React from 'react';
import styles from "./BasketItem.module.css"
import ProductCounter from "../ProductCounter/ProductCounter";

export interface BasketItemProps {
    id: string,
    image: string,
    name: string,
    cost: number,
    shoppingItemId: string,
    dough: number,
    size: number
}

const BasketItem = ({id, image, name, cost, shoppingItemId, dough, size}: BasketItemProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.information}>
                <img className={styles.image} src={image} alt={name}/>
                <div className={styles.nameWrapper}>
                    <div className={styles.name}>{name}</div>
                    {dough && <div className={styles.notes}> Тесто {dough}</div>}
                    {size && <div className={styles.notes}>Размер {size}</div>}
                </div>
            </div>
            <div className={styles.options}>
                <ProductCounter id={id} shoppingItemId={shoppingItemId}/>
            </div>
            <span className={styles.price}>{cost} ₽</span>
        </div>
    );
};

export default BasketItem;