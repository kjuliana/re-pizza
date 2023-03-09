import React from 'react';
import Header from "../Header/Header";
import styles from './Layout.module.css';
import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children} : LayoutProps) => {
    return (
        <div className={styles.root}>
            <Head>
                <title>Пицца Москва заказать пиццу</title>
            </Head>
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Layout;