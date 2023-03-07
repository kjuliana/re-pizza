import React from 'react';
import styles from "./Category.module.css";
import ProductCard from "../ProductCard/ProductCard";
import {Product} from "../../models/models";

interface CategoryProps {
    enName: string,
    name: string,
    products: Product[]
}

const Category = ({enName, name, products}: CategoryProps) => {
    return (
        <div id={enName} className={styles.root}>
            <h2 className={styles.name}>{name}</h2>
            <div className={styles.list}>
                {products.map((item) => <ProductCard key={item.id} itemId={item.id} name={item.name} shoppingItems={item.shoppingItems} description={item.description} image={item.image.url}/>)}
            </div>
        </div>
    );
};

export default Category;