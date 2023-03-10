import React from 'react';
import styles from './Header.module.css';
import Search from "../Search/Search";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.root}>
            <Link href="/" className={styles.logo}>
                <span className={styles.wordsLogo}>RE</span>
                <span>🍕</span>
                <span className={styles.wordsLogo}>PIZZA</span>
            </Link>
            <Search/>
        </div>
    );
};

export default Header;