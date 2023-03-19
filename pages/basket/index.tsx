import React from 'react';
import BasketItem from '../../components/BasketItem/BasketItem';
import Layout from "../../components/Layout/Layout";
import styles from "./index.module.css";
import CategoryList from "../../components/CategoryList/CategoryList";
import {useBasketTotalCost} from "../../hooks/useBasketTotalCost";
import Button from "../../components/UI/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import {useCategories} from "../../hooks/useCategories";
import {useProducts} from "../../hooks/useProducts";
import {groupByCategoryId} from "../../models/product/utils";
import Link from "next/link";
import {useBasketItems} from "../../hooks/useBasketItems";

const Basket = () => {
    const categories = useCategories();
    const products = useProducts();

    const productsByCategoryId = groupByCategoryId(products);

    const cost = useBasketTotalCost();
    const delivery = cost > 1000 ? 0 : 69;
    const totalCost = cost + delivery;

    const basketItems = useBasketItems(products);

    if (!products.length) return (
        <Layout>
            <Loader/>
        </Layout>
    )

    if (!basketItems.length) return (
        <Layout>
            <h1>Корзина пуста</h1>
            <h3>Вам может быть интересно</h3>
            <CategoryList productsByCategoryId={productsByCategoryId} categories={categories} search='' productCount={products.length}/>
        </Layout>
    )

    return (
        <Layout>
            <div className={styles.root}>
                <div className={styles.basketList}>
                    <h2>Корзина</h2>
                    {basketItems.map((item) =>
                        <BasketItem
                            key={item.shoppingItemId}
                            id={item.id}
                            image={item.image}
                            shoppingItemId={item.shoppingItemId}
                            name={item.name}
                            cost={item.cost}
                            dough={item.dough}
                            size={item.size}
                        />
                    )}
                </div>
                <div className={styles.orderWrapper}>
                    <h2>Итого</h2>
                    <div className={styles.totalWrapper}>
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
                        <div className={styles.row+' '+styles.total}>
                            <span>К оплате</span>
                            <span className={styles.totalCost}>{totalCost} ₽</span>
                        </div>
                        <Link href="/order">
                            <Button tag='button' wide={true}>Заказать</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <h3>Вам может быть интересно</h3>
            <CategoryList productsByCategoryId={productsByCategoryId} categories={categories} search='' productCount={products.length}/>
        </Layout>
    );
};

export default Basket;