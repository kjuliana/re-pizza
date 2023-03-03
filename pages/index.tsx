import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout/Layout";
import {useLazyGetUserReposQuery, useSearchUsersQuery} from "../store/github/github.api";
import styles from './index.module.css';
import {useDebounce} from "../hooks/debounce";
import RepoCard from "../components/RepoCard/RepoCard";

const Index = () => {
    const [search, setSearch] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const debounced = useDebounce(search);
    const {data, isLoading, isError} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    });

    const [fetchRepos, {isLoading: areReposLoading, data: repos}] = useLazyGetUserReposQuery();

    useEffect(() => {
       setDropdown(debounced.length > 2 && data?.length > 0)
    }, [debounced, data])

    const clickHandler= (username: string) => {
        fetchRepos(username);
        setDropdown(false);
    }

    return (
        <Layout>
            <div className={styles.inputWrapper}>
                <input
                    type='search'
                    className={styles.input}
                    placeholder='Поиск пользователей'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                {dropdown && <ul className={styles.dropDown}>
                    {isLoading && <p>Идет загрузка</p>}
                    {data?.map(user => (
                        <li
                            key={user.id}
                            onClick={() => clickHandler(user.login)}
                        >
                            {user.login}
                        </li>
                    ))}
                </ul>}
            </div>
            <div>
                {areReposLoading && <p>REPOS LOADING</p>}
                {repos?.map(repo => <RepoCard key={repo.id} repo={repo}/>)}
            </div>
        </Layout>
    );
};

export default Index;