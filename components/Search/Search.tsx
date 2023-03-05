import React, {useEffect, useState} from 'react';
import styles from './Search.module.css';
import {useDebounce} from "../../hooks/debounce";
import {useSearchActions} from "../../hooks/action";

const Search = () => {
    const [search, setSearch] = useState('');
    const debounced = useDebounce(search);
    const {updateSearch} = useSearchActions();

    useEffect(() => {
        updateSearch(debounced);
    }, [debounced]);

    return (
        <input
            autoComplete='off'
            placeholder='Поиск'
            type='search'
            className={styles.root}
            onChange={e => setSearch(e.target.value)}
        />
    );
};

export default Search;