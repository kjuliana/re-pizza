import React from 'react';
import {useGetPizzaQuery} from "../../store/pizza.api";
import styles from "./CatalogCategoryList.module.css";
import ProductCard from "../ProductCard/ProductCard";
import {Item} from "../../models/models";
import Loader from "../UI/Loader/Loader";

interface CatalogCategoryListProps {
    id: string,
    enName: string,
    name: string
}

const CatalogCategoryList = ({id, enName, name}: CatalogCategoryListProps) => {
    const {data, isLoading} = useGetPizzaQuery('pizza');

    if (isLoading) return <Loader/>;

    const itemsInCategory: Item[] = data.items.filter((item) => item.menuCategoryId === id);

    return (
        <div id={enName} className={styles.root}>
            <h2 className={styles.name}>{name}</h2>
            <div className={styles.list}>
                {itemsInCategory.map((item) => <ProductCard key={item.id} id={item.id} name={item.name} price={item.shoppingItems[0].price} description={item.description} image={item.image.url}/>)}
            </div>
        </div>
    );
};

export default CatalogCategoryList;