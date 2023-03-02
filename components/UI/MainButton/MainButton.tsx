import React from 'react';
import styles from './MainButton.module.css';

interface MainButtonProps {
    children: React.ReactNode,
    // onClick: () => string,
    onClick(event: React.MouseEvent<HTMLButtonElement>)
}

const MainButton = ({children, onClick}: MainButtonProps) => {

    return (
        <button onClick={onClick} className={styles.root}>
            {children}
        </button>
    );
};

export default MainButton;