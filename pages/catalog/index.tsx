import React from 'react';
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './index.module.css';

const Catalog = () => {
    const catalog = [
        {
            id: 1,
            name: 'Бананы с запиской-пожеланием',
            price: 1250,
            count: 5,
            image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
        },
        {
            id: 2,
            name: 'Турецкие бананы',
            price: 400,
            count: 5,
            image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
        },
        {
            id: 3,
            name: 'Атлантические бананы',
            price: 3000,
            count: 5,
            image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
        },
        {
            id: 4,
            name: 'Грузинские бананы',
            price: 2500,
            count: 5,
            image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
        },
        {
            id: 5,
            name: 'Смоленские бананы',
            price: 150,
            count: 5,
            image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
        },
        {
            id: 6,
            name: 'Астраханские бананы',
            price: 250,
            count: 6,
            image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
        },
        {
            id: 7,
            name: 'Подмосковные бананы',
            price: 600,
            count: 4,
            image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
        },
        {
            id: 8,
            name: 'Искусственные бананы',
            price: 250,
            count: 5,
            image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
        },
        {
            id: 9,
            name: 'Бананы с запахом летних дынь',
            price: 350,
            count: 1,
            image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
        },
        {
            id: 10,
            name: 'Бананы обыкновенные',
            price: 200,
            count: 5,
            image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
        },

    ];

    return (
        <Layout>
            <div className={styles.catalog}>
                {catalog.map((item)=>
                    <ProductCard id={item.id} key={item.id} name={item.name} price={item.price} count={item.count} image={item.image}/>
            )}
            </div>
        </Layout>
    );
};

export default Catalog;