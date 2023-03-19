import React, {useState} from 'react';
import Layout from "../../components/Layout/Layout";
import styles from "./index.module.css";
import OrderForm from "../../components/OrderForm/OrderForm";
import {useProducts} from "../../hooks/useProducts";
import Loader from "../../components/UI/Loader/Loader";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import {useAppSelector} from "../../hooks/redux";
import {useBasketActions} from "../../hooks/action";

const sendToServer = (form, basket) => {
    const basketArr = [];
    for (let item in basket) {
        for (let product in basket[item]) {
            basketArr.push({[product]: basket[item][product]})
        }
    }

    const orderData = {
        contacts: form,
        order: basketArr
    }

    console.log(orderData);


}

const Order = () => {
    const products = useProducts();
    const basket = useAppSelector(store => store.basket);
    const {removeAllBasket} = useBasketActions();
    const [isSubmit, setIsSubmit] = useState(false);

    if (!products.length) return (
        <Layout>
            <Loader/>
        </Layout>
    )

    if (isSubmit) {
        return <Layout>
            <h1>
                Заказ принят! Мы свяжемся с вами в течение 10 минут. Спасибо!
            </h1>
        </Layout>
    }

    return (
        <Layout>
            <h1>Оформление заказа</h1>
            <div className={styles.contentWrapper}>
                <OrderInfo products={products}/>
                <OrderForm onSubmit={(form) => {
                    setIsSubmit(true);
                    sendToServer(form, basket);
                    removeAllBasket();
                }}/>
            </div>
        </Layout>
    );
};

export default Order;