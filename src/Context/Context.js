import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function MyProvider({ children }) {
  
    const [sharedValue, setSharedValue] = useState();

    const updateSharedValue = (newValue) => {
        setSharedValue(newValue);
    }

    return (
        <MyContext.Provider value={{ sharedValue, updateSharedValue }}>
            {children}
        </MyContext.Provider>
    )

}

export function useMyContext() {
    return useContext(MyContext);
}