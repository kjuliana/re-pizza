import React from 'react';
import styles from './Search.module.css';

const Search = () => {
    return (
        <input placeholder='Search' type='search' className={styles.root}/>
    );
};

export default Search;