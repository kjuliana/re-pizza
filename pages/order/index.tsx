import React from 'react';
import Layout from "../../components/Layout/Layout";
import styles from "./index.module.css";
import OrderForm from "../../components/OrderForm/OrderForm";
import {useProducts} from "../../hooks/useProducts";
import Loader from "../../components/UI/Loader/Loader";
import OrderInfo from "../../components/OrderInfo/OrderInfo";

const Order = () => {
    const products = useProducts();

    if (!products.length) return (
        <Layout>
            <Loader/>
        </Layout>
    )

    return (
        <Layout>
            <h1>Оформление заказа</h1>
            <div className={styles.contentWrapper}>
                <OrderInfo products={products}/>
                <OrderForm/>
            </div>
        </Layout>
    );
};

export default Order;