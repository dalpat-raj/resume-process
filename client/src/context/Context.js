import { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";


const Store = createContext();

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, {
        input_data: [],
        skin_code: [],
        input_fields: [],
        user_details: [],
    })

    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}

export default Context;

export const StoreState = () => {
    return useContext(Store)
}