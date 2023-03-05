import React from 'react';
import Layout from "../components/Layout/Layout";
import CategoryMenu from "../components/CategoryMenu/CategoryMenu";
import CatalogList from "../components/CatalogList/CatalogList";

const Index = () => {
    return (
        <Layout>
            <CategoryMenu/>
            <CatalogList/>
        </Layout>
    );
};

export default Index;