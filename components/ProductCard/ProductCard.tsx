import React from 'react';
import styles from './ProductCard.module.css';
import MainButton from "../UI/MainButton/MainButton";

interface ProductCardProps {
    name: string,
    price: number,
    count: number,
    image: string,
}

const ProductCard = ({name, price, count, image}: ProductCardProps) => {
    return (
        <div className={styles.root}>
            <img className={styles.image} src={image} alt={name}/>
            <div className={styles.about}>
                <span className={styles.bold}>{price} ₽</span>
                <span className={styles.mute}>/ {count} шт</span>
                <p>{name}</p>
            </div>
            <MainButton>
                Купить
            </MainButton>
        </div>
    );
};

export default ProductCard;