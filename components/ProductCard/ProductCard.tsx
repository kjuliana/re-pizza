import React, {useEffect, useState} from 'react';
import styles from './ProductCard.module.css';
import ProductCounter from "../ProductCounter/ProductCounter";
import {ShoppingItem} from "../../models/models";
import {useDough} from "../../hooks/useDough";
import {useSize} from "../../hooks/useSize";

interface ProductCardProps {
    itemId: string
    name: string,
    description: string,
    image: string,
    shoppingItems: ShoppingItem[]
}


const ProductCard = ({itemId, name, description, shoppingItems, image}: ProductCardProps) => {
    const [currentShoppingItemId, setCurrentShoppingItemId] = useState(shoppingItems[0].id);
    const [currentDoughtId, setCurrentDoughtId] = useState(1);
    const [currentSizeId, setCurrentSizeId] = useState(2);
    const formatDough = useDough();
    const formatSize = useSize();

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
            if (!sizesByDough[currentDoughtId].find(sizeId => sizeId === currentSizeId)) setCurrentSizeId(2);
            setCurrentShoppingItemId(shoppingItems.find(shoppingItem =>
                shoppingItem.dough === currentDoughtId && shoppingItem.size === currentSizeId)?.id)
        }
    }, [currentDoughtId, currentSizeId]);

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
                    <div className={styles.optionsWrapper}>
                        <div className={styles.doughOptions}>
                            {Object.keys(sizesByDough)
                                .map(doughId =>
                                    <button
                                        className={currentDoughtId === Number(doughId) ? styles.current + ' ' + styles.option : styles.option}
                                        key={doughId}
                                        onClick={() => setCurrentDoughtId(Number(doughId))}
                                    >
                                        {formatDough(doughId)}
                                    </button>
                                )
                            }
                        </div>
                        <div className={styles.sizeOptions}>
                            {sizesByDough[currentDoughtId] &&
                            sizesByDough[currentDoughtId]
                                .map(sizeId =>
                                    <button
                                        className={currentSizeId === sizeId ? styles.current + ' ' + styles.option : styles.option}
                                        key={sizeId}
                                        onClick={() => setCurrentSizeId(sizeId)}
                                    >
                                        {formatSize(sizeId)}
                                    </button>
                                )
                            }
                        </div>
                    </div>
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