import {useEffect} from "react";

const useIntersection = (
    ref: RefParam | undefined,
    cb: (val: boolean) => void
): void => {
    useEffect(() => {

        if (!ref || !ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                cb(entry.isIntersecting)
            }
        );

        ref && ref.current && observer.observe(ref.current);

        return () => observer.unobserve(ref.current);
    }, [ref, cb]);
};

export {
    useIntersection
};
