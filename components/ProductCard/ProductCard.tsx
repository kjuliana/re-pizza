import React from 'react';
import styles from './ProductCard.module.css';
import ProductCounter from "../ProductCounter/ProductCounter";

interface ProductCardProps {
    id: string
    name: string,
    price: number,
    description: string,
    image: string,
}


const ProductCard = ({id, name, price, description, image}: ProductCardProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <img className={styles.image} src={image} alt={name}/>
                <div className={styles.about}>
                    <div className={styles.price}>{price} ₽</div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.notes}>{description}</div>
                </div>
            </div>
            <ProductCounter id={id}/>
        </div>
    );
};

export default ProductCard;