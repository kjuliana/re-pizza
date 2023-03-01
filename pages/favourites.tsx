import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout/Layout";
import {useAppSelector} from "../hooks/redux";


const Favourites = () => {
    const [fav, setFav] = useState([]);
    const {favourites} = useAppSelector(state => state.github);

    useEffect(() => {
        setFav(favourites);
    }, []);

    return (
        <Layout>
            {fav.length !== 0
                ?
                    <ul>
                        {fav.map(f => <li key={f}>{f}</li>)}
                    </ul>
                : <p>Нет ничего</p>
            }
        </Layout>
    );
};

export default Favourites;