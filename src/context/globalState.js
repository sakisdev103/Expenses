import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

// Create context

export const globalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(
        <globalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </globalContext.Provider>    
        
    )
}