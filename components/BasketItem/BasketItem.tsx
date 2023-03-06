import React from 'react';
import styles from "./BasketItem.module.css"
import ProductCounter from "../ProductCounter/ProductCounter";

export interface BasketItemProps {
    id: string,
    image: string,
    name: string,
    cost: number
}

const BasketItem = ({id, image, name, cost}: BasketItemProps) => {

    return (
        <div className={styles.root}>
            <div className={styles.information}>
                <img className={styles.image} src={image} alt={name}/>
                <div className={styles.name}>{name}</div>
            </div>
            <div className={styles.options}>
                <ProductCounter id={id}/>
            </div>
            <span className={styles.price}>{cost} ₽</span>
        </div>
    );
};

export default BasketItem;