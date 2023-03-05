import React from 'react';
import styles from "./CategoryMenu.module.css";
import {useCategories} from "../../hooks/useCategories";
import {useAppSelector} from "../../hooks/redux";

const CategoryMenu = () => {
    const categories = useCategories();
    const {search} = useAppSelector(state => state.pizza);

    const classOption = search.length === 0 ? styles.option : styles.disabled;

    return (
        <div className={styles.root} >
            {categories.map((category) => <a href={'#'+category.analyticsName} key={category.id} className={classOption}>{category.name}</a>)}
        </div>
    );
};

export default CategoryMenu;