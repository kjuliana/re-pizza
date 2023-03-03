import React from 'react';
import styles from './ProductCard.module.css';
import ProductCounter from "../ProductCounter/ProductCounter";

interface ProductCardProps {
    id: number
    name: string,
    price: number,
    count: number,
    image: string,
}

const ProductCard = ({id, name, price, count, image}: ProductCardProps) => {
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
            <ProductCounter id={id}/>
        </div>
    );
};

export default ProductCard;