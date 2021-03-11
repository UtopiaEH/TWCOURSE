import React from "react";
import { RootStore$ } from "./stores/RootStore$";

const MainStore = RootStore$.create({})

const storeContext = React.createContext({})

export const StoreProvider = (props) => {
    return <storeContext.Provider value={ MainStore }> { props.children } </storeContext.Provider>
}

export function useRootStore() {
    const store = React.useContext(storeContext)
    if (!store) {
        throw new Error('useStore shall be used within StoreProvider')
    }
    return store
}
