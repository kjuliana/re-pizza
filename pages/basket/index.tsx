import React from 'react';
import BasketItem from '../../components/BasketItem/BasketItem';
import Layout from "../../components/Layout/Layout";
import {useAppSelector} from "../../hooks/redux";
import styles from "./index.module.css";
import CatalogList from "../../components/Catalog/Catalog";
import {useTotalCount} from "../../hooks/totalCount";

const Basket = () => {
    const {basket} = useAppSelector(state => state);

    const totalCount = useTotalCount();

    return (
        <Layout>
            {
                Object.keys(basket).length !== 0
                    ?
                        <div className={styles.root}>
                            <div className={styles.basketList}>
                                <h1>Корзина</h1>
                                {Object.entries(basket).map(([productId, count]) =>
                                    <BasketItem key={productId} id={Number(productId)} basketCount={count}/>
                                )}
                            </div>
                            <div className={styles.orderWrapper}>
                                <div>
                                    Всего товаров:
                                </div>
                                <div>
                                    Итого: {totalCount}
                                </div>
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