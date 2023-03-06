import React from 'react';
import styles from "./Category.module.css";
import ProductCard from "../ProductCard/ProductCard";
import {Product} from "../../models/models";
import Loader from "../UI/Loader/Loader";

interface CategoryProps {
    enName: string,
    name: string,
    products: Product[]
}

const Category = ({enName, name, products}: CategoryProps) => {
    if (!products.length) return <Loader/>;

    return (
        <div id={enName} className={styles.root}>
            <h2 className={styles.name}>{name}</h2>
            <div className={styles.list}>
                {products.map((item) => <ProductCard key={item.id} id={item.id} name={item.name} price={item.shoppingItems[0].price} description={item.description} image={item.image.url}/>)}
            </div>
        </div>
    );
};

export default Category;