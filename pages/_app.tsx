import '../style/globalStyle.css';
import {AppProps} from 'next/app';
import React from "react";
import {Provider} from "react-redux";
import {store} from "../store";


export default function MyApp({ Component, pageProps }: AppProps) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>

}