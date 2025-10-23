import { RefObject, useEffect } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLElement | null>, handler?: () => void, timeout?: number) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const elem = e.target as Node | null;

            if(ref.current && !ref.current.contains(elem)){
                if(timeout){
                    setTimeout(() => { handler?.() }, timeout);
                }else{
                    handler?.();
                }
            }

        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [ref])
}