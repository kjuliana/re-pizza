import React from 'react';
import styles from './Header.module.css';
import Search from "../Search/Search";
import Link from "next/link";
import {useBasketTotalCost} from "../../hooks/useBasketTotalCost";
import {useBasketItemCount} from "../../hooks/useBasketItemCount";
import Button from "../UI/Button/Button";

const Header = () => {
    const basketItemCount = useBasketItemCount();
    const basketTotalCost = useBasketTotalCost();

    return (
        <div className={styles.root}>
            <Link href="/" className={styles.logo}>Едамаркет</Link>
            <Search/>
            <div className={styles.basketWrapper}>
                <Link href="/basket" className={styles.link}>
                    <Button tag='div'>
                        {basketTotalCost} ₽ | 🛒 {+basketItemCount}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;