import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout/Layout";
import {useAppSelector} from "../../hooks/redux";

const Basket = () => {
    const {basket} = useAppSelector(state => state);

    const [basketState, setBasketState] = useState({});

    useEffect(() => {
        setBasketState(basket);
    }, []);

    return (
        <Layout>
           <div>

           </div>
        </Layout>
    );
};

export default Basket;