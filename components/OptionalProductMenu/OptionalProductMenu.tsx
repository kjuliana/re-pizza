import React from 'react';
import styles from './OptionalProductMenu.module.css';
import {ShoppingItem} from "../../models/models";
import {useDough} from "../../hooks/useDough";
import {useSize} from "../../hooks/useSize";

interface OptionalProductMenuProps {
    shoppingItems: ShoppingItem[],
    currentDoughId: number,
    setCurrentDoughId:  React.Dispatch<React.SetStateAction<number>>,
    currentSizeId: number,
    setCurrentSizeId: React.Dispatch<React.SetStateAction<number>>
}

const OptionalProductMenu = ({shoppingItems, currentDoughId, setCurrentDoughId, currentSizeId, setCurrentSizeId}: OptionalProductMenuProps) => {
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
                    .map(doughId =>
                        <button
                            className={currentDoughId === Number(doughId) ? styles.current + ' ' + styles.option : styles.option}
                            key={doughId}
                            onClick={() => setCurrentDoughId(Number(doughId))}
                        >
                            {formatDough(Number(doughId))}
                        </button>
                    )
                }
            </div>
            <div className={styles.sizeOptions}>
                {sizesByDough[currentDoughId] &&
                sizesByDough[currentDoughId]
                    .map(sizeId =>
                        <button
                            className={currentSizeId === sizeId ? styles.current + ' ' + styles.option : styles.option}
                            key={sizeId}
                            onClick={() => setCurrentSizeId(sizeId)}
                        >
                            {formatSize(sizeId)}
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default OptionalProductMenu;