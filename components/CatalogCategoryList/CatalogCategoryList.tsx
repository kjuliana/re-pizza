import React from 'react';
import {useGetPizzaQuery} from "../../store/pizza.api";
import styles from "./CatalogCategoryList.module.css";
import ProductCard from "../ProductCard/ProductCard";

interface CatalogCategoryListProps {
    id: string,
    enName: string,
    name: string
}

const CatalogCategoryList = ({id, enName, name}: CatalogCategoryListProps) => {
    const {data} = useGetPizzaQuery('pizza');

    return (
        <div id={enName} className={styles.root}>
            <h2 className={styles.name}>{name}</h2>
            <div className={styles.list}>
                {data?.items.filter((item) => item.menuCategoryId === id).map((item) => <ProductCard key={item.id} id={item.id} name={item.name} price={item.shoppingItems[0].price} description={item.description} image={item.image.url}/>)}
            </div>
        </div>
    );
};

export default CatalogCategoryList;