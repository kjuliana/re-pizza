import React from 'react';
import BasketItem from '../../components/BasketItem/BasketItem';
import Layout from "../../components/Layout/Layout";
import {useAppSelector} from "../../hooks/redux";
import styles from "./index.module.css";
import CatalogList from "../../components/Catalog/Catalog";
import {useBasketTotalCost} from "../../hooks/useBasketTotalCost";
import Button from "../../components/UI/Button/Button";

const Basket = () => {
    const {basket} = useAppSelector(state => state);

    const cost = useBasketTotalCost();

    const delivery = cost > 1000 ? 0 : 69;

    const totalCost = cost + 69;

    return (
        <Layout>
            {
                Object.keys(basket).length !== 0
                    ?
                        <div className={styles.root}>
                            <div className={styles.basketList}>
                                <h2>Корзина</h2>
                                {Object.entries(basket).map(([productId, count]) =>
                                    <BasketItem key={productId} id={Number(productId)} count={count}/>
                                )}
                            </div>
                            <div className={styles.orderWrapper}>
                                <h2>Итого</h2>
                                <div className={styles.row}>
                                    <div>Товары</div>
                                    <div className={styles.price}>{cost} ₽</div>
                                </div>
                                <div className={styles.row}>
                                    <div>
                                        Доставка
                                        {delivery > 0 &&
                                        <div className={styles.notes}>Бесплатная доставка от 1000 ₽</div>
                                        }
                                    </div>
                                    <div className={styles.price}>{delivery} ₽</div>
                                </div>
                                <div className={styles.row}>
                                    <h2>К оплате</h2>
                                    <h2>{totalCost} ₽</h2>
                                </div>
                                <Button tag='button'>Заказать</Button>
                            </div>
                        </div>
                    : <h1>Корзина пуста</h1>
            }
            <h3>Вам может быть интересно</h3>
            <CatalogList/>

        </Layout>
    );
};

export default Basket;