import React from 'react';
import styles from "./Button.module.css";

interface ButtonProps {
    children: React.ReactNode,
    tag: 'button' | 'div',
    onClick?(event: React.MouseEvent): void,
    option: string
}

const Button = ({children, tag, onClick, option}: ButtonProps) => {

    const Tag = tag;
    const buttonClass = styles.root+' '+styles[option];

    return (
        <Tag onClick={onClick} className={buttonClass}>
            {children}
        </Tag>
    );
};

export default Button;