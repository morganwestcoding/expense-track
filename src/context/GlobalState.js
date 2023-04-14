import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

//Initial state
const initialState = {
    transactions: []   
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispactch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispactch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispactch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}