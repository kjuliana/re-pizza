import React, {useState} from 'react';
import styles from './ProductCard.module.css';
import ProductCounter from "../ProductCounter/ProductCounter";
import {ShoppingItem} from "../../models/models";

interface ProductCardProps {
    id: string
    name: string,
    description: string,
    image: string,
    shoppingItems: ShoppingItem[]
}


const ProductCard = ({id, name, description, shoppingItems, image}: ProductCardProps) => {
    const [currentShoppingItemId, setCurrentShoppingItemId] = useState(shoppingItems[0].id);

    const price = shoppingItems.find((item) => item.id === currentShoppingItemId).price;

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <img className={styles.image} src={image} alt={name}/>
                <div className={styles.about}>
                    <div className={styles.price}>{price} ₽</div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.notes}>{description}</div>
                    {shoppingItems.length > 1 &&
                    <div className={styles.variants}>
                        {shoppingItems.map((item) => (
                            <button className={styles.variant} key={item.id} onClick={() => setCurrentShoppingItemId(item.id)}>
                                <p>Тесто:{item.dough}</p>
                                <p>Размер: {item.size}</p>
                                <p>{item.price} ₽</p>
                            </button>
                        ))}
                    </div>
                    }
                </div>
            </div>
            <ProductCounter id={id} shoppingItemId={currentShoppingItemId}/>
        </div>
    );
};

export default ProductCard;