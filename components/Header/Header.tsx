import React from 'react';
import styles from './Header.module.css';
import Search from "../Search/Search";
import Link from "next/link";
import {useAppSelector} from "../../hooks/redux";
import {useBasketTotalCost} from "../../hooks/useBasketTotalCost";
import {useBasketItemCount} from "../../hooks/useBasketItemCount";

const Header = () => {
    const basketItemCount = useBasketItemCount();
    const basketTotalCost = useBasketTotalCost();

    return (
        <div className={styles.root}>
            <Link href="/" className={styles.logo}>Едамаркет</Link>
            <Link href="/catalog" className={styles.link}>Каталог</Link>
            <Search/>
            <div className={styles.basketWrapper}>
                <Link href="/basket" className={styles.link}>
                    <div className={'button '+styles.button}>
                        {basketTotalCost} ₽ | 🛒 {+basketItemCount}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;