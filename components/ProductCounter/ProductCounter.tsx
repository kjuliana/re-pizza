import React from 'react';
import styles from './ProductCounter.module.css';
import {useBasketActions} from "../../hooks/action";
import {useAppSelector} from "../../hooks/redux";
import Button from "../UI/Button/Button";

interface MainButtonProps {
    // children: React.ReactNode,
    id: number
    // onClick(event: React.MouseEvent<HTMLButtonElement>)
}

const ProductCounter = ({id}: MainButtonProps) => {
    const {addBasket, removeBasket} = useBasketActions();
    const basket = useAppSelector(state => state.basket);

    const addToBasket = (event: React.MouseEvent) => {
        event.preventDefault();
        addBasket(id);
    }

    const removeFromBasket = (event: React.MouseEvent) => {
        event.preventDefault();
        removeBasket(id);
    }

    return (
        <>
            {basket[id]
                ?
                    <div className={styles.wrapper}>
                        <Button onClick={removeFromBasket} tag={'button'} option={'buttonChange'}>
                            -
                        </Button>
                        {basket[id]}
                        <Button onClick={addToBasket} tag={'button'} option={'buttonChange'}>
                            +
                        </Button>
                    </div>
                :
                    <Button onClick={addToBasket} tag={'button'} option={'buttonBuy'}>
                        Купить
                    </Button>
            }
        </>
    );
};

export default ProductCounter;
