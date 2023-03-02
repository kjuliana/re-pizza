import React from 'react';
import styles from './Header.module.css';
import Search from "../Search/Search";
import Link from "next/link";
import {useAppSelector} from "../../hooks/redux";

const Header = () => {
    const basket = useAppSelector(state => state.basket);

    let basketCount = 0;

    for (let key in basket) {
        basketCount += basket[key];
    }

    return (
        <div className={styles.root}>
            <Link href="/" className={styles.logo}>Едамаркет</Link>
            <Link href="/catalog" className={styles.link}>Каталог</Link>
            <Search/>
            <Link href="/basket" className={styles.link}>Корзина : {basketCount}</Link>
        </div>
    );
};

export default Header;