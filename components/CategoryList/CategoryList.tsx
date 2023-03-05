import React from 'react';
import Category from "../Category/Category";
import styles from "./CategoryList.module.css";
import {useCategories} from "../../hooks/useCategories";
import {useProducts} from "../../hooks/useProducts";
import {Product} from "../../models/models";

type ProductsByCategory = {
    [categoryId: string]: Product[]
}

const groupByCategoryId = (products: Product[]): ProductsByCategory => {
    const result: ProductsByCategory = {};
    for (let product of products) {
        result[product.menuCategoryId] ??= [];
        result[product.menuCategoryId].push(product);
    }
    return result;
}

const CategoryList = () => {
    const categories = useCategories();
    const products = useProducts();

    const productsByCategoryId = groupByCategoryId(products);

    if (!categories.length) return <div className={styles.root}>
        <h1>Ничего не найдено 🥲</h1>
    </div>

    return (
        <div>
            {categories.map((category) =>
                    <Category key={category.id} enName={category.analyticsName} name={category.name} products={productsByCategoryId[category.id]}/>
            )}
        </div>
    );
};

export default CategoryList;
