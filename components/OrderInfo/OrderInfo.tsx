import React from 'react';
import styles from "./OrderInfo.module.css";
import {useBasketItems} from "../../hooks/useBasketItems";
import {useDough} from "../../hooks/useDough";
import {useSize} from "../../hooks/useSize";
import {useBasketTotalCost} from "../../hooks/useBasketTotalCost";
import {Product} from "../../models/models";

interface OrderInfoProps {
    products: Product[]
}

const OrderInfo = ({products}: OrderInfoProps) => {
    const totalCost = useBasketTotalCost();
    const basketItems = useBasketItems(products);
    const formatDough = useDough();
    const formatSize = useSize();

    return (
        <div className={styles.infoWrapper}>
            {basketItems.map((item) =>
                <div key={item.shoppingItemId} className={styles.itemWrapper}>
                    {item.name}
                    <span className={styles.notes}> {formatDough(item.dough)} {formatSize(item.size)} ×{item.count}</span>
                </div>
            )}
            <div className={styles.itemWrapper}>
                Доставка {totalCost < 1000 ? '69 ₽': '0 ₽'}
            </div>
            <div className={styles.totalCost}>К оплате {totalCost} ₽</div>
        </div>
    );
};

export default OrderInfo;