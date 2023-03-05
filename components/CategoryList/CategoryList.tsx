import React from 'react';
import Category from "../Category/Category";
import styles from "./CategoryList.module.css";
import {MenuCategory, ProductsByCategory} from "../../models/models";

interface CategoryListProps {
    productCount: number,
    categories: MenuCategory[],
    productsByCategoryId: ProductsByCategory
}

const CategoryList = ({productCount, categories, productsByCategoryId}: CategoryListProps) => {
    if (!productCount) return <div className={styles.root}>
        <h1>Ничего не найдено 🥲</h1>
    </div>

    return (
        <div>
            {categories
                .filter((category) => productsByCategoryId[category.id])
                .map((category) =>
                    <Category key={category.id} enName={category.analyticsName} name={category.name} products={productsByCategoryId[category.id]}/>
                )}
        </div>
    );
};

export default CategoryList;
