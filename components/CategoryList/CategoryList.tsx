import React from 'react';
import Category from "../Category/Category";
import styles from "./CategoryList.module.css";
import {MenuCategory, ProductsByCategory} from "../../models/models";
import Loader from "../UI/Loader/Loader";

interface CategoryListProps {
    productCount: number,
    categories: MenuCategory[],
    productsByCategoryId: ProductsByCategory,
    search: string
}

const CategoryList = ({productCount, search, categories, productsByCategoryId}: CategoryListProps) => {
    if (!productCount) {
        return search
            ?
            <div className={styles.root}>
                <h1>Ничего не найдено 🥲</h1>
            </div>
            :
            <div className={styles.root}>
                <Loader/>
            </div>
    }

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
