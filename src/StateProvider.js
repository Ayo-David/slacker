import React, { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    return (<StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>);
};

export const useDataLayer = () => useContext(StateContext);