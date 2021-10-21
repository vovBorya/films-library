import {createContext} from "react";

type DefaultContext = {
    pageCursor: number,
    setPageCursor: (val: number) => void
}

const defaultValue: DefaultContext = {
    pageCursor: 1,
    setPageCursor: (val: number): void => {}
};

const Context = createContext(defaultValue);

export {
    Context,
    defaultValue
};
