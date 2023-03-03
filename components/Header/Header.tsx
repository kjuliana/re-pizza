import React from 'react';
import styles from './Header.module.css';
import Search from "../Search/Search";
import Link from "next/link";
import {useAppSelector} from "../../hooks/redux";
import {useTotalPrice} from "../../hooks/totalPrice";
import {useTotalCountProduct} from "../../hooks/totalCountProduct";

const Header = () => {
    const totalCount = useTotalCountProduct();
    const totalPrice = useTotalPrice();

    return (
        <div className={styles.root}>
            <Link href="/" className={styles.logo}>Едамаркет</Link>
            <Link href="/catalog" className={styles.link}>Каталог</Link>
            <Search/>
            <div className={styles.basketWrapper}>
                <Link href="/basket" className={styles.link}>
                    <button className={'button '+styles.button}>
                        {totalPrice} ₽ | 🛒 {+totalCount}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;