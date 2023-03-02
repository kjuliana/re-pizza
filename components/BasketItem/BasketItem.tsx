import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/redux";
import styles from "./BasketItem.module.css"
import MainButton from "../UI/MainButton/MainButton";

interface BasketItemProps {
    id: number,
    basketCount: number
}

const BasketItem = ({id, basketCount}: BasketItemProps) => {
    const catalog = useAppSelector(state => state.catalog);

    const [item, setItem] = useState({
        name: '',
        image: '',
        price: 0
    });

    useEffect(() => {
        setItem(catalog.find(product => product.id === id))
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.information}>
                <img className={styles.image} src={item.image} alt={item.name}/>
                <p>{item.name}</p>
            </div>
            <div className={styles.options}>
                <MainButton id={id}/>
            </div>
            <span className={styles.price}>{item.price*basketCount} ₽</span>
        </div>
    );
};

export default BasketItem;