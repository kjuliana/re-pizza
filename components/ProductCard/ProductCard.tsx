import React, {useEffect, useState} from 'react';
import styles from './ProductCard.module.css';
import ProductCounter from "../ProductCounter/ProductCounter";
import {ShoppingItem} from "../../models/models";
import OptionalProductMenu from "../OptionalProductMenu/OptionalProductMenu";

interface ProductCardProps {
    itemId: string
    name: string,
    description: string,
    image: string,
    shoppingItems: ShoppingItem[]
}

const ProductCard = ({itemId, name, description, shoppingItems, image}: ProductCardProps) => {
    const [currentShoppingItemId, setCurrentShoppingItemId] = useState(shoppingItems[0].id);
    const [currentDoughId, setCurrentDoughId] = useState(1);
    const [currentSizeId, setCurrentSizeId] = useState(2);

    const price = shoppingItems.find((item) => item.id === currentShoppingItemId)?.price;
    const sizesByDough = {};

    if (shoppingItems.length > 1) {
        for (let shoppingItem of shoppingItems) {
            sizesByDough[shoppingItem.dough] ??= [];
            sizesByDough[shoppingItem.dough].push(shoppingItem.size)
        }
    }

    useEffect(() => {
        if (shoppingItems.length > 1) {
            if (!sizesByDough[currentDoughId].find(sizeId => sizeId === currentSizeId)) setCurrentSizeId(2);
            setCurrentShoppingItemId(shoppingItems.find(shoppingItem =>
                shoppingItem.dough === currentDoughId && shoppingItem.size === currentSizeId)?.id)
        }
    }, [currentDoughId, currentSizeId]);

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <img className={styles.image} src={image} alt={name}/>
                <div className={styles.about}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.notes}>{description}</div>
                </div>
            </div>
            <div className={styles.wrapper}>
                {
                    shoppingItems.length > 1 &&
                    <OptionalProductMenu
                        shoppingItems={shoppingItems}
                        currentDoughId={currentDoughId}
                        setCurrentDoughId={setCurrentDoughId}
                        currentSizeId={currentSizeId}
                        setCurrentSizeId={setCurrentSizeId}
                    />
                }
                <div className={styles.priceWrapper}>
                    <div className={styles.price}>{price} ₽</div>
                    <ProductCounter id={itemId} shoppingItemId={currentShoppingItemId} isBasketItem={false}/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;