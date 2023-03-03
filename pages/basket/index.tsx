import React from 'react';
import BasketItem from '../../components/BasketItem/BasketItem';
import Layout from "../../components/Layout/Layout";
import {useAppSelector} from "../../hooks/redux";
import styles from "./index.module.css";
import CatalogList from "../../components/Catalog/Catalog";
import {useBasketTotalCost} from "../../hooks/useBasketTotalCost";
import {useBasketItemCount} from "../../hooks/useBasketItemCount";

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
                                <h1>Корзина</h1>
                                {Object.entries(basket).map(([productId, count]) =>
                                    <BasketItem key={productId} id={Number(productId)} count={count}/>
                                )}
                            </div>
                            <div className={styles.orderWrapper}>
                                <h2>Итого</h2>
                                <p>Доставка 30-40 минут</p>
                                <p>Товары {cost} ₽</p>
                                <p>Доставка {delivery} ₽</p>
                                {delivery && <p>Бесплатная доставка от 1000 ₽</p>}
                                <h3>К оплате {totalCost}</h3>
                                <button className='button'>Заказать</button>
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