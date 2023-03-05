import React, {useEffect, useState} from 'react';
import styles from "./BasketItem.module.css"
import ProductCounter from "../ProductCounter/ProductCounter";
import {useGetPizzaQuery} from "../../store/pizza.api";

interface BasketItemProps {
    id: string,
    count: number
}

const BasketItem = ({id, count}: BasketItemProps) => {
    const {data} = useGetPizzaQuery('pizza');

    const [item, setItem] = useState({
        name: '',
        image: '',
        price: 1
    });

    const sum = item.price*count;

    useEffect(() => {
        const gag = data.items.find(item => item.id === id);
        setItem({
            name: gag.name,
            image: gag.image.url,
            price: gag.shoppingItems[0].price
        })
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.information}>
                <img className={styles.image} src={item.image} alt={item.name}/>
                <div className={styles.name}>{item.name}</div>
            </div>
            <div className={styles.options}>
                <ProductCounter id={id}/>
            </div>
            <span className={styles.price}>{sum} ₽</span>
        </div>
    );
};

export default BasketItem;