import React from 'react';
import BasketItem, {BasketItemProps} from '../../components/BasketItem/BasketItem';
import Layout from "../../components/Layout/Layout";
import {useAppSelector} from "../../hooks/redux";
import styles from "./index.module.css";
import CategoryList from "../../components/CategoryList/CategoryList";
import {useBasketTotalCost} from "../../hooks/useBasketTotalCost";
import Button from "../../components/UI/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import {useCategories} from "../../hooks/useCategories";
import {useProducts} from "../../hooks/useProducts";
import {groupByCategoryId} from "../../models/product/utils";

const Basket = () => {
    const categories = useCategories();
    const products = useProducts();

    const productsByCategoryId = groupByCategoryId(products);

    const basket = useAppSelector(state => state.basket);

    const cost = useBasketTotalCost();
    const delivery = cost > 1000 ? 0 : 69;
    const totalCost = cost + 69;

    if (!products.length) return (
        <Layout>
            <Loader/>
        </Layout>
    )

    const basketItems: BasketItemProps[] = [];

    for (let productId in basket) {
        const item = products.find(item => item.id === productId);
        for (let shoppingItemId in basket[productId]) {
            const shoppingItem = item.shoppingItems.find(item => item.id === shoppingItemId);
            basketItems.push(
                {
                    id: productId,
                    name: item.name,
                    image: item.image.url,
                    shoppingItemId: shoppingItemId,
                    cost: basket[productId][shoppingItemId] * shoppingItem.price,
                    dough: shoppingItem.dough,
                    size: shoppingItem.size
                }
            )
        }
    }

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
                            key={item.id}
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
                        <Button tag='button' wide={true}>Заказать</Button>
                    </div>
                </div>
            </div>
            <h3>Вам может быть интересно</h3>
            <CategoryList productsByCategoryId={productsByCategoryId} categories={categories} search='' productCount={products.length}/>
        </Layout>
    );
};

export default Basket;