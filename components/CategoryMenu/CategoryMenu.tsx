import React from 'react';
import styles from "./CategoryMenu.module.css";
import {MenuCategory, ProductsByCategory} from "../../models/models";
import ToBasketButton from "../ToBasketButton/ToBasketButton";

interface CategoryMenuProps {
    categories: MenuCategory[],
    productsByCategoryId: ProductsByCategory
}

const CategoryMenu = ({categories, productsByCategoryId}: CategoryMenuProps) => {
    return (
            <div className={styles.root}>
                <div className={styles.menu}>
                    {categories.map((category) => {
                        return productsByCategoryId[category.id]?.length
                            ? <a href={'#' + category.analyticsName} key={category.id}
                                 className={styles.option}>{category.name}</a>
                            : <span key={category.id} className={styles.disabled}>{category.name}</span>
                    })}
                </div>
                <ToBasketButton/>
            </div>
    );
}
export default CategoryMenu;