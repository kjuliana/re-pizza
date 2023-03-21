import {useEffect, useState} from 'react';

const isServer = typeof window === 'undefined';
const media = isServer ? null : matchMedia('(max-width: 767px)');

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(media?.matches ?? false);

    useEffect(() => {
        const onMediaChange = (event) => {
            setIsMobile(event.matches)
        }
        media.addEventListener('change',onMediaChange);
        return () => {
            media.removeEventListener('change', onMediaChange)
        }
    }, []);

    return isMobile;
};