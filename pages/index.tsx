import React from 'react';
import Layout from "../components/Layout/Layout";
import CategoryMenu from "../components/CategoryMenu/CategoryMenu";
import CategoryList from "../components/CategoryList/CategoryList";

const Index = () => {
    return (
        <Layout>
            <CategoryMenu/>
            <CategoryList/>
        </Layout>
    );
};

export default Index;