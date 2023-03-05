import React from 'react';
import CatalogCategoryList from "../CatalogCategoryList/CatalogCategoryList";
import styles from "./CatalogList.module.css";
import {useGetCategories} from "../../hooks/useGetCategories";

const CatalogList = () => {
    const categories = useGetCategories();

    return (
        <div className={styles.root}>
            {categories.map((category) =>
                    <CatalogCategoryList id={category.id} enName={category.analyticsName} name={category.name}/>
            )}
        </div>
    );
};

export default CatalogList;
