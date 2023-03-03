import React from 'react';
import styles from "./Button.module.css";

interface ButtonProps {
    children: React.ReactNode,
    tag?: 'button' | 'div',
    onClick?(event: React.MouseEvent): void,
    wide?: boolean
}

const Button = ({children, tag='button', onClick, wide}: ButtonProps) => {

    const Tag = tag;
    const buttonClass = wide ? styles.root+' '+styles.rootWide : styles.root;

    return (
        <Tag onClick={onClick} className={buttonClass}>
            {children}
        </Tag>
    );
};

export default Button;