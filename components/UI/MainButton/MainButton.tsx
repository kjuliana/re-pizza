import React from 'react';
import styles from './MainButton.module.css';
import {useBasketActions} from "../../../hooks/action";
import {useAppSelector} from "../../../hooks/redux";

interface MainButtonProps {
    // children: React.ReactNode,
    id: number
    // onClick(event: React.MouseEvent<HTMLButtonElement>)
}

const MainButton = ({id}: MainButtonProps) => {
    const {addBasket, removeBasket} = useBasketActions();
    const basket = useAppSelector(state => state.basket);

    const addToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addBasket(id);
    }

    const removeFromBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        removeBasket(id);
    }

    return (
        <>
            {basket[id]
                ?
                    <div className={styles.wrapper}>
                        <button onClick={removeFromBasket} className={styles.button + ' ' + styles.optionButton}>
                            -
                        </button>
                        {basket[id]}
                        <button onClick={addToBasket} className={styles.button + ' ' + styles.optionButton}>
                            +
                        </button>
                    </div>
                :
                    <button onClick={addToBasket} className={styles.button + ' ' + styles.startButton}>
                        Купить
                    </button>
            }
        </>
    );
};

export default MainButton;
