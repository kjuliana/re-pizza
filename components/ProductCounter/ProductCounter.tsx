import React from 'react';
import styles from './ProductCounter.module.css';
import {useBasketActions} from "../../hooks/action";
import {useAppSelector} from "../../hooks/redux";
import Button from "../UI/Button/Button";

interface MainButtonProps {
    // children: React.ReactNode,
    id: string,
    shoppingItemId: string
    // onClick(event: React.MouseEvent<HTMLButtonElement>)
}

const ProductCounter = ({id, shoppingItemId}: MainButtonProps) => {
    const {addBasket, removeBasket} = useBasketActions();
    const basket = useAppSelector(state => state.basket);

    const addToBasket = (event: React.MouseEvent) => {
        event.preventDefault();
        addBasket({id: id, shoppingItemId: shoppingItemId});
    }

    const removeFromBasket = (event: React.MouseEvent) => {
        event.preventDefault();
        removeBasket({id: id, shoppingItemId: shoppingItemId});
    }

    return (
        <>
            {basket[id]
                ?
                    <div className={styles.wrapper}>
                        <Button onClick={removeFromBasket}>−</Button>
                        {basket[id]}
                        <Button onClick={addToBasket}>+</Button>
                    </div>
                :
                    <Button onClick={addToBasket} wide>Купить</Button>
            }
        </>
    );
};

export default ProductCounter;
