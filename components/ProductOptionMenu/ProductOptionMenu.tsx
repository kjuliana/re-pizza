import React from 'react';
import styles from './ProductOptionMenu.module.css';
import {ShoppingItem} from "../../models/models";
import {useDough} from "../../hooks/useDough";
import {useSize} from "../../hooks/useSize";

interface ProductOptionMenuProps {
    shoppingItems: ShoppingItem[],
    doughId: number,
    onDoughIdChange:  React.Dispatch<React.SetStateAction<number>>,
    sizeId: number,
    onSizeIdChange: React.Dispatch<React.SetStateAction<number>>
}

const ProductOptionMenu = ({shoppingItems, doughId, onDoughIdChange, sizeId, onSizeIdChange}: ProductOptionMenuProps) => {
    const formatDough = useDough();
    const formatSize = useSize();

    const sizesByDough = {};
    for (let shoppingItem of shoppingItems) {
        sizesByDough[shoppingItem.dough] ??= [];
        sizesByDough[shoppingItem.dough].push(shoppingItem.size)
    }

    return (
        <div className={styles.root}>
            <div className={styles.doughOptions}>
                {Object.keys(sizesByDough)
                    .map(current =>
                        <button
                            className={Number(current) === doughId ? styles.current + ' ' + styles.option : styles.option}
                            key={current}
                            onClick={() => onDoughIdChange(Number(current))}
                        >
                            {formatDough(Number(current))}
                        </button>
                    )
                }
            </div>
            <div className={styles.sizeOptions}>
                {sizesByDough[doughId] &&
                sizesByDough[doughId]
                    .map(current =>
                        <button
                            className={current === sizeId ? styles.current + ' ' + styles.option : styles.option}
                            key={current}
                            onClick={() => onSizeIdChange(current)}
                        >
                            {formatSize(current)}
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default ProductOptionMenu;