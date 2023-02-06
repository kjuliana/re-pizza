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
            <img className={styles.image} src={image}/>
            <p>
                <b>{price} ₽</b>
                / {count} шт.
            </p>
            <p>{name}</p>
            <MainButton>
                Купить
            </MainButton>
        </div>
    );
};

export default ProductCard;