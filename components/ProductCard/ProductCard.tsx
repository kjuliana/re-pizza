import React from 'react';
import styles from './ProductCard.module.css';
import MainButton from "../UI/MainButton/MainButton";
import {useBasketActions} from "../../hooks/action";
import {useAppSelector} from "../../hooks/redux";

interface ProductCardProps {
    id: number
    name: string,
    price: number,
    count: number,
    image: string,
}

const ProductCard = ({id, name, price, count, image}: ProductCardProps) => {
    const {addBasket, removeFromBasket} = useBasketActions();
    const {basket} = useAppSelector(state => state.basket);

    const addToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addBasket(id);
    }

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <img className={styles.image} src={image} alt={name}/>
                <div className={styles.about}>
                    <span className={styles.price}>{price} ₽</span>
                    <span className={styles.unit}>/ {count} шт</span>
                    <p>{name}</p>
                </div>
            </div>
            <MainButton onClick={addToBasket}>
                Купить
            </MainButton>
        </div>
    );
};

export default ProductCard;