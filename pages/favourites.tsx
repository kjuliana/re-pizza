import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout/Layout";
import {useAppSelector} from "../hooks/redux";


const Favourites = () => {
    const [fav, setFav] = useState([]);
    const {favourites} = useAppSelector(state => state.github);

    useEffect(() => {
        setFav(favourites);
    }, []);

    if (fav.length === 0) {
        return <Layout><p>Нет ничего</p></Layout>;
    }
    return (
        <Layout>
            {fav.map((url) => <li key={url}>{url}</li>)}
        </Layout>
    );
};

export default Favourites;