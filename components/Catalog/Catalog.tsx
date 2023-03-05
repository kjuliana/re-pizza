import React from 'react';
import styles from "./Catalog.module.css"
import ProductCard from "../ProductCard/ProductCard";
import {useGetPizzaQuery} from "../../store/pizza.api";

const CatalogList = () => {
    const {data} = useGetPizzaQuery('pizza');

    return (
        <div className={styles.root}>
            {data?.items.map((item) => <ProductCard id={item.id} name={item.name} price={item.shoppingItems[0].price} description={item.description} image={item.image.url}/>)}
        </div>
    );
};

export default CatalogList;
