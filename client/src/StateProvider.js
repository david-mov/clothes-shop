import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ checkoutReducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(checkoutReducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);