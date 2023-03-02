import React from 'react';
import styles from "./Catalog.module.css"
import ProductCard from "../ProductCard/ProductCard";
import {useAppSelector} from "../../hooks/redux";

const CatalogList = () => {
    const catalog = useAppSelector(state => state.catalog);

    return (
        <div className={styles.root}>
            {catalog.map((item)=>
                <ProductCard id={item.id} key={item.id} name={item.name} price={item.price} count={item.count} image={item.image}/>
            )}
        </div>
    );
};

export default CatalogList;
