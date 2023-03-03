import {ReactNode, useEffect} from "react";
import {useBasketActions} from "../hooks/action";

type Props = {
    children: ReactNode;
}

export function Initializer({children}: Props) {
    const {restore} = useBasketActions();

    useEffect(() => {
        restore();
    }, []);

    return <>{children}</>
}