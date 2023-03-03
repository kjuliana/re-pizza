import React, {useState} from 'react';
import {IRepo} from "../../models/models";
import styles from './RepoCard.module.css';
import {useGithubActions} from "../../hooks/action";
import {useAppSelector} from "../../hooks/redux";

const RepoCard = ({repo}: {repo: IRepo}) => {

    const {addFavourite, removeFavourite} = useGithubActions();
    const {favourites} = useAppSelector(state => state.github);
    const isFav = favourites.includes(repo.html_url);

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addFavourite(repo.html_url);
    }

    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        removeFavourite(repo.html_url);
    }


    return (
        <div className={styles.root}>
            <a href={repo.html_url} target='_blank'>
                <h2>{repo.name}</h2>
                <p>Forks: {repo.forks}</p>
                <p>Watchers: {repo.watchers}</p>
            </a>
            {isFav
                ? <button onClick={removeFromFavourite}>Удалить</button>
                : <button onClick={addToFavourite}>Добавить</button>
            }
        </div>
    );
};

export default RepoCard;
