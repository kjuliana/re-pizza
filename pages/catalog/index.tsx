import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './index.module.css';
import {useAppSelector} from "../../hooks/redux";

const Catalog = () => {
    const catalog = useAppSelector(state => state.catalog);

    return (
        <Layout>
            <div className={styles.catalog}>
                {catalog.map((item)=>
                    <ProductCard id={item.id} key={item.id} name={item.name} price={item.price} count={item.count} image={item.image}/>
            )}
            </div>
        </Layout>
    );
};

export default Catalog;