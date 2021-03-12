import React from "react";
import { RootStore$ } from "./stores/RootStore$";

const MainStore = RootStore$.create({})

const StoreContext = React.createContext({})

export const StoreProvider = (props) => {
    return <StoreContext.Provider value={ MainStore }> { props.children } </StoreContext.Provider>
}

export function useRootStore() {
    const store = React.useContext(StoreContext)
    if (!store) {
        throw new Error('useStore shall be used within StoreProvider')
    }
    return store
}
