import React from 'react';
import styles from './MainButton.module.css';

interface MainButtonProps {
    children: React.ReactNode
}

const MainButton = ({children}: MainButtonProps) => {
    return (
        <button className={styles.root}>
            {children}
        </button>
    );
};

export default MainButton;