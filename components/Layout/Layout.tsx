import React from 'react';
import Header from "../Header/Header";
import styles from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children} : LayoutProps) => {
    return (
        <div className={styles.root}>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;