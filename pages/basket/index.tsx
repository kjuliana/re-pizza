import React from 'react';
import BasketItem from '../../components/BasketItem/BasketItem';
import Layout from "../../components/Layout/Layout";
import {useAppSelector} from "../../hooks/redux";
import styles from "./index.module.css";

const Basket = () => {
    const {basket} = useAppSelector(state => state);

    return (
        <Layout>
            {
                Object.keys(basket).length !== 0
                    ?
                        <div className={styles.root}>
                            <div className={styles.basketList}>
                                {Object.entries(basket).map(([productId, count]) =>
                                    <BasketItem key={productId} id={Number(productId)} basketCount={count}/>
                                )}
                            </div>
                            <div className={styles.orderWrapper}>
                                Итого:
                            </div>
                        </div>
                    : <h1>Корзина пуста</h1>
            }

        </Layout>
    );
};

export default Basket;