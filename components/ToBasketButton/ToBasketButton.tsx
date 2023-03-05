import React from 'react';
import styles from "./ToBasketButton.module.css";
import Link from "next/link";
import Button from "../UI/Button/Button";
import {useBasketItemCount} from "../../hooks/useBasketItemCount";
import {useBasketTotalCost} from "../../hooks/useBasketTotalCost";

const ToBasketButton = () => {
    const basketItemCount = useBasketItemCount();
    const basketTotalCost = useBasketTotalCost();

    return (
        <div className={styles.root}>
            <Link href="/basket" className={styles.link}>
                <Button tag='div'>
                    {basketTotalCost}&nbsp;₽&nbsp;|&nbsp;🛒&nbsp;{+basketItemCount}
                </Button>
            </Link>
        </div>
    );
};

export default ToBasketButton;