import React, {useState} from 'react';
import {IRepo} from "../../models/models";
import styles from './RepoCard.module.css';
import {useActions} from "../../hooks/action";
import {useAppSelector} from "../../hooks/redux";

const RepoCard = ({repo}: {repo: IRepo}) => {

    const {addFavorite, removeFavorite} = useActions();
    const {favourites} = useAppSelector(state => state.github);
    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addFavorite(repo.html_url);
        setIsFav(true);
    }

    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        removeFavorite(repo.html_url);
        setIsFav(false);
    }


    return (
        <div className={styles.root}>
            <a href={repo.html_url} target='_blank'>
                <h2>{repo.name}</h2>
                <p>Forks: {repo.forks}</p>
                <p>Watchers: {repo.watchers}</p>
            </a>
            {!isFav && <button onClick={addToFavourite}>Добавить</button>}
            {isFav && <button onClick={removeFromFavourite}>Удалить</button>}
        </div>
    );
};

export default RepoCard;
