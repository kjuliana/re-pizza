import React from 'react';
import {useGetPizzaQuery} from "../../store/pizza.api";
import styles from "./CategoryMenu.module.css";

const CategoryMenu = () => {
    const {data} = useGetPizzaQuery('pizza');

    return (
        <div className={styles.root} >
            {data?.menuCategories.map((category) => <div className={styles.option}>{category.name}</div>)}
        </div>
    );
};

export default CategoryMenu;