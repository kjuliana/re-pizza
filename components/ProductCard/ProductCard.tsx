import React, {useState} from 'react';
import styles from './ProductCard.module.css';
import ProductCounter from "../ProductCounter/ProductCounter";
import {ShoppingItem} from "../../models/models";
import {useAppSelector} from "../../hooks/redux";
import {useSize} from "../../hooks/useSize";

interface ProductCardProps {
    id: string
    name: string,
    description: string,
    image: string,
    shoppingItems: ShoppingItem[]
}


const ProductCard = ({id, name, description, shoppingItems, image}: ProductCardProps) => {
    const [currentShoppingItemId, setCurrentShoppingItemId] = useState(shoppingItems[0].id);
    const basket = useAppSelector(state => state.basket);

    const price = shoppingItems.find((item) => item.id === currentShoppingItemId).price;
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <img className={styles.image} src={image} alt={name}/>
                <div className={styles.about}>
                    <div className={styles.price}>{price} ₽</div>
                    {shoppingItems.length > 1 &&
                    <div className={styles.variants}>
                        <div>
                            <p>Традиционное</p>
                            <div className={styles.optionWrapper}>
                                {shoppingItems.filter(item => item.dough === 1).map((item) => {
                                    const classButton = currentShoppingItemId === item.id ? styles.variant + ' ' +styles.currentVariant : styles.variant;
                                    // const {name: dough} = useDough(item.dough);
                                    const {name: size} = useSize(item.size);
                                    return (
                                        <button className={classButton} key={item.id} onClick={() => setCurrentShoppingItemId(item.id)}>
                                            {basket[id] && basket[id][item.id] ? <div className={styles.counter}>{basket[id][item.id]}</div> : <></>}
                                            {/*<p>{dough}</p>*/}
                                            <p>{size}</p>
                                            {/*<p>{item.price} ₽</p>*/}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <p>Тонкое</p>
                            <div className={styles.optionWrapper}>
                            {shoppingItems.filter(item => item.dough === 2).map((item) => {
                                const classButton = currentShoppingItemId === item.id ? styles.variant + ' ' +styles.currentVariant : styles.variant;
                                // const {name: dough} = useDough(item.dough);
                                const {name: size} = useSize(item.size);
                                return (
                                    <button className={classButton} key={item.id} onClick={() => setCurrentShoppingItemId(item.id)}>
                                        {basket[id] && basket[id][item.id] ? <div className={styles.counter}>{basket[id][item.id]}</div> : <></>}
                                        {/*<p>{dough}</p>*/}
                                        <p>{size}</p>
                                        {/*<p>{item.price} ₽</p>*/}
                                    </button>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                    }
                    <div className={styles.name}>{name}</div>
                    <div className={styles.notes}>{description}</div>

                </div>
            </div>
            <ProductCounter id={id} shoppingItemId={currentShoppingItemId}/>
        </div>
    );
};

export default ProductCard;