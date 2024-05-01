import {useEffect, useRef} from "react";

export const useObserver = (reference, canLoad, isLoading, onObserve) => {
    const observer = useRef();

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && canLoad) {
                onObserve();
            }
        };

        observer.current = new IntersectionObserver(callback);
        observer.current.observe(reference.current);
    }, [isLoading]);
};