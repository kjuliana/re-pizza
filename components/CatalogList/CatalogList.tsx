import React from 'react';
import {useGetPizzaQuery} from "../../store/pizza.api";
import CatalogCategoryList from "../CatalogCategoryList/CatalogCategoryList";
import styles from "./CatalogList.module.css";

const CatalogList = () => {
    const {data} = useGetPizzaQuery('pizza');

    return (
        <div className={styles.root}>
            {data?.menuCategories.map((category) =>
                    <CatalogCategoryList id={category.id} enName={category.analyticsName} name={category.name}/>
            )}
        </div>
    );
};

export default CatalogList;
