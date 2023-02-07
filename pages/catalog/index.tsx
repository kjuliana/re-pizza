import React from 'react';
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './index.module.css';

const Catalog = () => {
    return (
        <Layout>
            <div className={styles.catalog}>
                <ProductCard name={'Бананы'} price={250} count={5} image={'https://megatitan.ru/upload/iblock/865/wommylb9wv2demew28g7r91gx0qxmz9d.jpg'}/>
                <ProductCard name={'Бананы'} price={250} count={5} image={'https://megatitan.ru/upload/iblock/865/wommylb9wv2demew28g7r91gx0qxmz9d.jpg'}/>
                <ProductCard name={'Бананы'} price={250} count={5} image={'https://megatitan.ru/upload/iblock/865/wommylb9wv2demew28g7r91gx0qxmz9d.jpg'}/>
                <ProductCard name={'Бананы'} price={250} count={5} image={'https://megatitan.ru/upload/iblock/865/wommylb9wv2demew28g7r91gx0qxmz9d.jpg'}/>
                <ProductCard name={'Бананы'} price={250} count={5} image={'https://megatitan.ru/upload/iblock/865/wommylb9wv2demew28g7r91gx0qxmz9d.jpg'}/>
                <ProductCard name={'Бананы'} price={250} count={5} image={'https://megatitan.ru/upload/iblock/865/wommylb9wv2demew28g7r91gx0qxmz9d.jpg'}/>
                <ProductCard name={'Бананы'} price={250} count={5} image={'https://megatitan.ru/upload/iblock/865/wommylb9wv2demew28g7r91gx0qxmz9d.jpg'}/>
            </div>
        </Layout>
    );
};

export default Catalog;