import React from 'react';
import styles from "./Input.module.css";

export type InputProps = {
    placeholder: string,
    id: string,
    name: string,
    value: string,
    autoComplete?: string,
    onChange: (newValue: string)=>void
}

const Input = ({id, placeholder, name, value, autoComplete, onChange}: InputProps) => {
    return (
        <div className={styles.root}>
            <label htmlFor={id}>
                {name}
            </label>
            <input
                className={styles.input}
                id={id}
                placeholder={placeholder}
                value={value}
                autoComplete={autoComplete}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
};

export default Input;