import React from 'react';
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";

const Catalog = () => {
    return (
        <Layout>
            Каталог
            <ProductCard name={'ляля'} price={4} count={4} image={'dfb'}/>
        </Layout>
    );
};

export default Catalog;