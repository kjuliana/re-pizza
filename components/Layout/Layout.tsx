import React from 'react';
import Header from "../Header/Header";
import styles from './Layout.module.css';
import Head from "next/head";
import favicon from './favicon.ico';

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children} : LayoutProps) => {
    return (
        <div className={styles.root}>
            <Head>
                <title>Re.Pizza Доставка пиццы Москва</title>
                <link rel="icon" href={favicon.src}/>
            </Head>
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Layout;