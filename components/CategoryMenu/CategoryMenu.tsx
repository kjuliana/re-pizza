import React from 'react';
import styles from "./CategoryMenu.module.css";
import {useGetCategories} from "../../hooks/useGetCategories";

const CategoryMenu = () => {
    const categories = useGetCategories();

    return (
        <div className={styles.root} >
            {categories.map((category) => <a href={'#'+category.analyticsName} key={category.id} className={styles.option}>{category.name}</a>)}
        </div>
    );
};

export default CategoryMenu;