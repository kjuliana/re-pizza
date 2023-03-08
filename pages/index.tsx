import React from 'react';
import Layout from "../components/Layout/Layout";
import CategoryMenu from "../components/CategoryMenu/CategoryMenu";
import CategoryList from "../components/CategoryList/CategoryList";
import {useCategories} from "../hooks/useCategories";
import {useProducts} from "../hooks/useProducts";
import {useAppSelector} from "../hooks/redux";
import {filter, groupByCategoryId} from "../models/product/utils";

const Index = () => {
    const categories = useCategories();
    const products = useProducts();
    const {search} = useAppSelector(state => state.search);

    const filteredProducts = filter(products, search);
    const productsByCategoryId = groupByCategoryId(filteredProducts);

    return (
        <Layout>
            <CategoryMenu categories={categories} productsByCategoryId={productsByCategoryId} />
            <CategoryList categories={categories} productsByCategoryId={productsByCategoryId} search={search} productCount={filteredProducts.length}/>
        </Layout>
    );
};

export default Index;